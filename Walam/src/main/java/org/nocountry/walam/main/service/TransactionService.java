package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.Transaction;

import java.util.List;

public interface TransactionService {
    List<Transaction> getAllTransactions();

    Transaction getById(int id);

    Transaction createTransaction(Transaction transaction);
}
