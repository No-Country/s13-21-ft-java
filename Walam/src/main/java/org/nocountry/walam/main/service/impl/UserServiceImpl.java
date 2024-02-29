package org.nocountry.walam.main.service.impl;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.dto.UserDTO;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<UserDTO> getAllUsers() throws Exception {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::mapUserToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UserDTO getByUsername(String username) throws Exception {
        Optional<User> userOptional = userRepository.findByUsername(username);
        User user = userOptional.orElseThrow(() -> new Exception("User not found"));
        return mapUserToDTO(user);
    }

    @Override
    public UserDTO getUserById(int id) throws Exception {
        Optional<User> userOptional = userRepository.findById(id);
        User user = userOptional.orElseThrow(() -> new Exception("User not found"));
        return mapUserToDTO(user);
    }

    @Override
    public void updateUser(int id, UserDTO userRequest) throws Exception {
        Optional<User> userOptional = userRepository.findById(id);
        User user = userOptional.orElseThrow(() -> new Exception("User not found"));

        user.setUsername(userRequest.getUsername());
        user.setLastName(userRequest.getLastName());
        user.setNoIdentidad(userRequest.getNoIdentidad());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        user.setCountry(userRequest.getCountry());
        user.setPhone(userRequest.getPhone());
        user.setBirthday(userRequest.getBirthday());
        user.setActive(userRequest.isActive());
        user.setRole(userRequest.getRole());

        userRepository.save(user);
    }

    private UserDTO mapUserToDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .lastName(user.getLastName())
                .noIdentidad(user.getNoIdentidad())
                .email(user.getEmail())
                .password(user.getPassword())
                .country(user.getCountry())
                .phone(user.getPhone())
                .birthday(user.getBirthday())
                .active(user.isActive())
                .role(user.getRole())
                .account(AccountDTO.builder().id(user.getAccount().getId()).build())
                .build();
    }

}

