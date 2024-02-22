package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
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
}
