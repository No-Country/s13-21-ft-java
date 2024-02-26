package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
=======
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value = "/")
    public String getPage() {
        return "Welcome";
    }

    @PostMapping(value = "/save")
    public String  createUser(@RequestBody User user) {
        userService.createUser(user);
        return "User registered...";
    }

    @GetMapping(value = "/user")
    public List<User> getUsers() {
        return userService.getUser();

    }
<<<<<<< HEAD
=======

    // Endpoint para obtener todos los usuarios
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // Endpoint para obtener un usuario por su ID
    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Integer id) {
        Optional<User> optionalUser = userService.getUserById(id);
        return optionalUser.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
