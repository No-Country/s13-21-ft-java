package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository <User, Integer>{
    Optional<User> findByUsername(String username);

<<<<<<< HEAD
=======
    Optional<User> findByEmail(String email);

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
