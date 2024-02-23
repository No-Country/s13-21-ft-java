package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
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

}
