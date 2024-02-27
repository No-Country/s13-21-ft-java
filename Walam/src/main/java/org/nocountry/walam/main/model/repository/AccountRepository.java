package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    // Consultas personalizadas si es necesario.
    boolean existsByNumberAccount(String numberAccount);
    boolean existsByCvu(String cvu);
}
