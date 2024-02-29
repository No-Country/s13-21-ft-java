package org.nocountry.walam.main.service;

import jakarta.validation.Valid;
import org.nocountry.walam.main.controller.TransactionRequest;
import org.nocountry.walam.main.controller.WithdrawOrDepositRequest;
import org.nocountry.walam.main.model.entity.Transaction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface TransactionService {

    Transaction saveTransaction(Transaction transaction);
    void deleteTransactionById(int id);
    List<Transaction> getAllTransactions();
    Transaction getTransactionById(int id);

    // Otras operaciones si es necesario.
    ResponseEntity<String> transferToAccount(TransactionRequest transactionRequest);
    public ResponseEntity withdraw(WithdrawOrDepositRequest withdraw );
    public ResponseEntity deposit(WithdrawOrDepositRequest deposit);
}
