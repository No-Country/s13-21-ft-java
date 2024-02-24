package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.model.entity.Transaction;
import org.nocountry.walam.main.model.repository.AccountRepository;
import org.nocountry.walam.main.model.repository.TransactionRepository;
import org.nocountry.walam.main.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/transactions")
public class TransactionController {

    private final TransactionRepository transactionRepository;
    private final AccountRepository accountRepository;

    @Autowired
    private TransactionService transactionService;

    public TransactionController(TransactionRepository transactionRepository, AccountRepository accountRepository) {
        this.transactionRepository = transactionRepository;
        this.accountRepository = accountRepository;
    }

    @GetMapping(value = "/")
    public ResponseEntity<List<Transaction>> getAllTransactions() {
        List<Transaction> transactions = transactionService.getAllTransactions();
        return new ResponseEntity<>(transactions, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Transaction> getById(int id) {
        Transaction transaction = transactionService.getById(id);
        return new ResponseEntity<>(transaction, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Transaction> createTransaction(@RequestBody Transaction transaction) {
        Transaction createdTransaction = transactionService.createTransaction(transaction);
        return new ResponseEntity<>(createdTransaction, HttpStatus.CREATED);
    }






    @GetMapping(value= "/asd")
    public String getPage() {return "Probando endpoint";
    }

    /*@PostMapping("/deposit")
    public ResponseEntity<String> deposit(@RequestBody Transaction transaction) {
        Account account = accountRepository.findByNumberAccount(transaction.getAccountNumber());
        if (account != null) {
            double currentBalance = account.getBalance();
            double amount = transaction.getAmount();
            account.setBalance(currentBalance + amount);
            accountRepository.save(account);
            transactionRepository.save(transaction);
            return ResponseEntity.ok("Depósito exitoso. Nuevo saldo: " + account.getBalance());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/withdraw")
    public ResponseEntity<String> withdraw(@RequestBody Transaction transaction) {
        Account account = accountRepository.findByNumberAccount(transaction.getAccountNumber());
        if (account != null) {
            double currentBalance = account.getBalance();
            double amount = transaction.getAmount();
            if (currentBalance >= amount) {
                account.setBalance(currentBalance - amount);
                accountRepository.save(account);
                transactionRepository.save(transaction);
                return ResponseEntity.ok("Retiro exitoso. Nuevo saldo: " + account.getBalance());
            } else {
                return ResponseEntity.badRequest().body("Fondos insuficientes");
            }
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/balance/{accountNumber}")
    public ResponseEntity<Double> getBalance(@PathVariable String accountNumber) {
        Account account = accountRepository.findByNumberAccount(accountNumber);
        if (account != null) {
            return ResponseEntity.ok(account.getBalance());
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/
}
