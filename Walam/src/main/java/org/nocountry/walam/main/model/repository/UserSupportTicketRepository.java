package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.entity.UserSupportTicket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserSupportTicketRepository extends JpaRepository<UserSupportTicket, Integer> {
<<<<<<< HEAD
    List<UserSupportTicket> findByOwner(User owner);
=======

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

    // Otras consultas personalizadas si es necesario.
}
