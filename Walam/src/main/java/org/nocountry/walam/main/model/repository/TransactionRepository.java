package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Integer> {
    // Aquí puedes definir métodos adicionales si es necesario

}

