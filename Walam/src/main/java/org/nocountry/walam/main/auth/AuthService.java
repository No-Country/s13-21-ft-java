package org.nocountry.walam.main.auth;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.entity.enums.Role;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.nocountry.walam.main.service.AccountService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.nocountry.walam.main.utils.UtilsAccount.generateAccountNumber;
import static org.nocountry.walam.main.utils.UtilsAccount.generateCvu;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final AccountService accountService;
    private UserDetails userDetails;

    /**
     * Realiza la autenticación del usuario utilizando las credenciales proporcionadas,
     * busca al usuario en la base de datos,
     * genera un token JWT basado en la información del usuario autenticado
     * y lo devuelve encapsulado en un objeto AuthResponse.
     * */
    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate( // AuthenticationManager se encarga de verificar si esas credenciales son válidas.
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword())); // Se crea un objeto con las credenciales proporcionadas en la solicitud(request).

        // Se Busca al usuario en la base de datos basándose en el nombre de usuario proporcionado en la solicitud de inicio de sesión. Si no encuentra al usuario, lanza una excepción.
        UserDetails user = userRepository.findByUsername(loginRequest.getUsername()).orElseThrow();
        String token = jwtService.getToken(user); // Utiliza el servicio jwtService para generar un token JWT basado en la información del usuario autenticado.

        return AuthResponse.builder()  // Retorna un objeto AuthResponse que contiene el token JWT generado.
                           .token(token)
                           .build();
    }

    @Transactional
    public AuthResponse register(RegisterRequest registerRequest) {
        User user = User.builder()
                .username(registerRequest.getUsername())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .active(true) // Supongo que por defecto los usuarios estarán activos
                .role(Role.USER) // Supongo que por defecto los nuevos usuarios tendrán el rol USER
                .build();

        String numberAccount= generateAccountNumber();

        while (accountService.existsByNumberAccount(numberAccount)){
            numberAccount=generateAccountNumber();
        }

        String cvu= generateCvu();

        while (accountService.existsByCvu(cvu)){
            cvu=generateCvu();
        }

        Account account = Account.builder()
                        .numberAccount(numberAccount)
                        .balance(0.00)
                        .user(user)
                        .cvu(cvu)
                        .build();

        user.setAccount(account);

        accountService.saveAccount(account);
        userRepository.save(user);

        return AuthResponse
                .builder()
                .token(jwtService.getToken(user))
                .build();
    }

}
