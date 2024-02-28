package org.nocountry.walam.main.service.impl;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
<<<<<<< HEAD
=======
import java.util.Optional;
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void createUser(User user) {
        userRepository.save(user);
    }
    public List<User> getUser(){
        return userRepository.findAll();
    }
<<<<<<< HEAD
=======

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(Integer id) {
        return userRepository.findById(id);
    }
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
