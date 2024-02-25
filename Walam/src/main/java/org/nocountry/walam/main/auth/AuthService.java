package org.nocountry.walam.main.auth;

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.entity.enums.Role;
import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private UserDetails userDetails;

    public AuthResponse login(LoginRequest loginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
        UserDetails userDetails = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
        String token = jwtService.getToken(userDetails);
        return AuthResponse
                .builder()
                .token(token)
                .build();
    }

    public AuthResponse register(RegisterRequest registerRequest) {
        User user = User.builder()
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .active(true) // Supongo que por defecto los usuarios estarán activos
                .role(Role.USER) // Supongo que por defecto los nuevos usuarios tendrán el rol USER
                .build();

        userRepository.save(user);

        return AuthResponse
                .builder()
                .token(jwtService.getToken(user))
                .build();
    }

}
