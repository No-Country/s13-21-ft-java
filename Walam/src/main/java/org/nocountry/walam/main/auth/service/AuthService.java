package org.nocountry.walam.main.auth.service;

import lombok.RequiredArgsConstructor;
<<<<<<< HEAD:Walam/src/main/java/org/nocountry/walam/main/auth/service/AuthService.java
import org.nocountry.walam.main.auth.response.AuthResponse;
import org.nocountry.walam.main.auth.request.LoginRequest;
import org.nocountry.walam.main.auth.request.RegisterRequest;
=======
<<<<<<< HEAD
import org.nocountry.walam.main.model.entity.Role;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.UserRepository;
=======
>>>>>>> 5e6838bad0d3b8e36c272d48afc965a09872f090:Walam/src/main/java/org/nocountry/walam/main/auth/AuthService.java
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.entity.enums.Role;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.AccountService;
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
<<<<<<< HEAD
=======
import org.springframework.transaction.annotation.Transactional;

import static org.nocountry.walam.main.utils.UtilsAccount.generateAccountNumber;
import static org.nocountry.walam.main.utils.UtilsAccount.generateCvu;
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
<<<<<<< HEAD
    private UserDetails userDetails;

    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
        UserDetails userDetails = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
=======
    private final AccountService accountService;
    private UserDetails userDetails;

    /**
     * Realiza la autenticación del usuario utilizando las credenciales proporcionadas,
     * busca al usuario en la base de datos,
     * genera un token JWT basado en la información del usuario autenticado
     * y lo devuelve encapsulado en un objeto AuthResponse.
     * */
    public AuthResponse login(LoginRequest loginRequest) {
<<<<<<< HEAD:Walam/src/main/java/org/nocountry/walam/main/auth/service/AuthService.java
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        userDetails = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
=======
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        UserDetails userDetails = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
>>>>>>> 5e6838bad0d3b8e36c272d48afc965a09872f090:Walam/src/main/java/org/nocountry/walam/main/auth/AuthService.java
        String token = jwtService.getToken(userDetails);

        return AuthResponse.builder()
                           .token(token)
                           .build();
    }

<<<<<<< HEAD
    public AuthResponse register(RegisterRequest registerRequest) {
        User user = User.builder()
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .firstname(registerRequest.getFirstname())
                .lastname(registerRequest.getLastname())
                .country(registerRequest.getCountry())
                .email((registerRequest.getEmail()))
                .role(Role.USER)
                .build();

=======
    @Transactional
    public AuthResponse register(RegisterRequest registerRequest) {
        User user = User.builder()
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .active(true) // Por defecto los usuarios estarán activos.
                .role(Role.USER) // Por defecto los nuevos usuarios tendrán el rol USER.
                .build();

        String numberAccount = generateAccountNumber();

        while (accountService.existsByNumberAccount(numberAccount)){
            numberAccount = generateAccountNumber();
        }

        String cvu = generateCvu();

        while (accountService.existsByCvu(cvu)){
            cvu = generateCvu();
        }

        Account account = Account.builder()
                        .numberAccount(numberAccount)
                        .balance(0.00)
                        .user(user)
                        .cvu(cvu)
                        .build();

        user.setAccount(account);

        accountService.saveAccount(account);
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
        userRepository.save(user);

        return AuthResponse
                .builder()
                .token(jwtService.getToken(user))
                .build();
    }
<<<<<<< HEAD
=======

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
