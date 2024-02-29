package org.nocountry.walam.main.service.impl;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.controller.TransactionRequest;
import org.nocountry.walam.main.controller.WithdrawOrDepositRequest;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.entity.Transaction;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.entity.enums.TransactionType;
import org.nocountry.walam.main.model.repository.AccountRepository;
import org.nocountry.walam.main.model.repository.TransactionRepository;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private final TransactionRepository transactionRepository;

    @Autowired
    private final AccountRepository accountRepository;

    @Autowired
    private final UserRepository userRepository;

    @Override
    public Transaction saveTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public void deleteTransactionById(int id) {
        transactionRepository.deleteById(id);
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    @Override
    public Transaction getTransactionById(int id) {
        return transactionRepository.findById(id).orElse(null);
    }

    @Override
    public ResponseEntity<String> transferToAccount(TransactionRequest transactionRequest) {
        Account accountLogged = getAccountOfCurrentUser();
        if (accountLogged != null && accountLogged.getBalance() >= transactionRequest.getAmount()) {
            Account destiny = accountRepository.findByNumberAccount(transactionRequest.getDestinyAccount());
            if (destiny != null) {
                // Realizar la transferencia
                performTransfer(accountLogged, destiny, transactionRequest.getAmount());
                // Registrar la transacción
                saveTransaction(accountLogged, destiny, transactionRequest.getAmount());
                return ResponseEntity.ok("Transferencia exitosa");
            }
        }
        return ResponseEntity.badRequest().body("Bad Request");
    }

    @Override
    public ResponseEntity withdraw(WithdrawOrDepositRequest withdraw) {
        Account account = getAccountOfCurrentUser();
        if(account.getBalance() >= withdraw.getAmount()){
            account.setBalance( account.getBalance() - withdraw.getAmount() );
            Transaction transaction = Transaction.builder()
                    .account(account)
                    .date(LocalDateTime.now())
                    .originAccount(account.getNumberAccount())
                    .destinyAccount(account.getNumberAccount())
                    .amount(withdraw.getAmount())
                    .type(TransactionType.WITHDRAW)
                    .build();
            transactionRepository.save(transaction);
            return ResponseEntity.ok("Withdraw Success");
        } else{
            return ResponseEntity.badRequest().body("Not enough balance");
        }
    }

    @Override
    public ResponseEntity deposit(WithdrawOrDepositRequest deposit) {
        Account account = getAccountOfCurrentUser();
        account.setBalance( account.getBalance() + deposit.getAmount() );
        Transaction transaction = Transaction.builder()
                .account(account)
                .date(LocalDateTime.now())
                .originAccount(account.getNumberAccount())
                .destinyAccount(account.getNumberAccount())
                .amount(deposit.getAmount())
                .type(TransactionType.DEPOSIT)
                .build();
        transactionRepository.save(transaction);
        return ResponseEntity.ok("Deposit Success");
    }

    private void performTransfer(Account origin, Account destiny, double amount) {
        origin.setBalance(origin.getBalance() - amount);
        destiny.setBalance(destiny.getBalance() + amount);
        accountRepository.save(origin);
        accountRepository.save(destiny);
    }

    private void saveTransaction(Account origin, Account destiny, double amount) {
        Transaction transaction = Transaction.builder()
                .date(LocalDateTime.now())
                .type(TransactionType.TRANSFER)
                .originAccount(origin.getNumberAccount())
                .destinyAccount(destiny.getNumberAccount())
                .account(origin)
                .amount(amount).build();
        transactionRepository.save(transaction);
    }

    public Account getAccountOfCurrentUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null ){
            Object principal = authentication.getPrincipal();
            if(principal instanceof UserDetails){
                String userName = ((UserDetails) principal).getUsername();
                User userInDb = userRepository.findByUsername(userName).get();
                return userInDb.getAccount();
            }
        }
        return null;
    }
}
