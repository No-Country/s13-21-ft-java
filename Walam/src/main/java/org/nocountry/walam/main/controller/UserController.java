package org.nocountry.walam.main.controller;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.dto.UserDTO;
import org.nocountry.walam.main.service.impl.UserServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserServiceImpl userService;

    @GetMapping()
    public ResponseEntity<List<UserDTO>> getAll() throws Exception {
        System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<UserDTO> getByUsername(@PathVariable String username) throws Exception {
        return ResponseEntity.ok(userService.getByUsername(username));
    }

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

}
