package org.nocountry.walam.main.service.impl;

import org.nocountry.walam.main.model.entity.Transaction;
import org.nocountry.walam.main.model.repository.TransactionRepository;
import org.nocountry.walam.main.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Override
    public List<Transaction> getAllTransactions() {
        // obtener todas las transacciones
        return transactionRepository.findAll();
    }

    @Override
    public Transaction getById(int id) {
        // obtiene transacciones por id
        Optional<Transaction> optTransaction = transactionRepository.findById(id); //devuelve objeto Transaction
        return optTransaction.orElse(null);
    }

    @Override
    public Transaction createTransaction(Transaction transaction) {
        // crea una transaccion
        return transactionRepository.save(transaction);
    }


}
