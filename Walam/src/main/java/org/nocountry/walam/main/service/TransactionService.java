package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.Transaction;

import java.util.List;

public interface TransactionService {

    Transaction saveTransaction(Transaction transaction);
    void deleteTransactionById(int id);
    List<Transaction> getAllTransactions();
    Transaction getTransactionById(int id);

    // Otras operaciones si es necesario.

}
