package org.nocountry.walam.main.repository;

import org.nocountry.walam.main.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository <Account, Long> {
    boolean existsByNumberAccount(String numberAccount);
    boolean existsById(long id);
}
