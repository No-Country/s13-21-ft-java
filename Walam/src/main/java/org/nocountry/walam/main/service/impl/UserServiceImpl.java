package org.nocountry.walam.main.service.impl;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.dto.TransactionDTO;
import org.nocountry.walam.main.model.dto.UpdateUserDTO;
import org.nocountry.walam.main.model.dto.UserDTO;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.entity.enums.Country;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<UserDTO> getAllUsers() throws Exception {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::mapUserToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public User getByUsername(String username) throws Exception {
        return userRepository.findByUsername(username).orElseThrow(() -> new Exception("User not found"));
    }

    @Override
    public UserDTO getUserById(int id) throws Exception {
        Optional<User> userOptional = userRepository.findById(id);
        User user = userOptional.orElseThrow(() -> new Exception("User not found"));
        return mapUserToDTO(user);
    }

    @Override
    public void updateUser(String username, UpdateUserDTO userRequest) throws Exception {
        Optional<User> userOptional = userRepository.findByUsername(username);
        User user = userOptional.orElseThrow(() -> new Exception("User not found"));

        user.setFirstName(userRequest.getFirstName());
        user.setLastName(userRequest.getLastName());
        user.setNoIdentidad(userRequest.getNoIdentidad());
        user.setCountry(userRequest.getCountry());
        user.setPhone(userRequest.getPhone());
        user.setBirthday(userRequest.getBirthday());

        userRepository.save(user);
    }

    public UserDTO mapUserToDTO(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .username(user.getUsername())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .noIdentidad(user.getNoIdentidad())
                .email(user.getEmail())
                .password(user.getPassword())
                .country(user.getCountry())
                .phone(user.getPhone())
                .birthday(user.getBirthday())
                .active(user.isActive())
                .role(user.getRole())
                .account(AccountDTO.builder()
                        .id(user.getAccount().getId())
                        .cvu(user.getAccount().getCvu())
                        .balance(user.getAccount().getBalance())
                        .numberAccount(user.getAccount().getNumberAccount())
                        .transactions(user.getAccount().getTransactions().stream().map(transaction -> {
                            return TransactionDTO.builder()
                                    .id(transaction.getId())
                                    .amount(transaction.getAmount())
                                    .date(transaction.getDate()).
                                    type(transaction.getType())
                                    .build();
                        }).collect(Collectors.toList()))
                        .build())
                .build();
    }

    @Transactional
    public void updateBirthday(Date birthday, User user) {
            user.setBirthday(birthday);
            userRepository.save(user);
    }

    @Transactional
    public void updatePhone(String phone,  User user) {
            user.setPhone(phone);
            userRepository.save(user);
    }

    @Transactional
    public void updatePassword(String password, User user) {
            if (!passwordEncoder.matches(password, user.getPassword())){
                user.setPassword(passwordEncoder.encode(password));
                userRepository.save(user);
        }
    }

    @Transactional
    public void updateCountry(Country country,  User user) {
            user.setCountry(country);
            userRepository.save(user);
    }

    @Transactional
    public void updateEmail(String email, User user) {
            user.setEmail(email);
            userRepository.save(user);
    }

    @Transactional
    public void updateLastName(String lastName, User user) {
            user.setLastName(lastName);
            userRepository.save(user);
    }

    @Transactional
    public void updateFirstName(String firstName, User user) {
        user.setFirstName(firstName);
        userRepository.save(user);
    }

    @Transactional
    public void updateNoIdentidad(String noIdentidad, User user) {
            user.setNoIdentidad(noIdentidad);
            userRepository.save(user);
    }


}

