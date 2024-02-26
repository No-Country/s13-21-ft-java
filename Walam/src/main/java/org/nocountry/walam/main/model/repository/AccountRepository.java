package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Integer> {
    // Consultas personalizadas si es necesario.
<<<<<<< HEAD
=======
    boolean existsByNumberAccount(String numberAccount);
    boolean existsByCvu(String cvu);
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
