package org.nocountry.walam.main.controller;

<<<<<<< HEAD
import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.dto.UserDTO;
import org.nocountry.walam.main.service.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
=======
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
>>>>>>> 5e6838bad0d3b8e36c272d48afc965a09872f090
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
<<<<<<< HEAD
@RequestMapping("/api/user")
=======
@RequestMapping("/api/users")
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
>>>>>>> 5e6838bad0d3b8e36c272d48afc965a09872f090
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping()
    public ResponseEntity<List<UserDTO>> getAll() throws Exception {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<UserDTO> getByUsername(@PathVariable String username) throws Exception {
        return ResponseEntity.ok(userService.getByUsername(username));
    }

<<<<<<< HEAD
=======
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
>>>>>>> 5e6838bad0d3b8e36c272d48afc965a09872f090
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getById(@PathVariable int id) throws Exception {
        return ResponseEntity.ok(userService.getUserById(id));
    }


    @PutMapping("/{id}")
    public ResponseEntity<String> updateUser(@PathVariable int id, @RequestBody UserDTO userRequest) {
        try {
            userService.updateUser(id, userRequest);
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user: " + e.getMessage());
        }
    }

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
