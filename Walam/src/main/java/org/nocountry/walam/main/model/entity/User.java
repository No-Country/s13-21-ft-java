package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

//import lombok.EqualsAndHashCode;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
@Table(name = "users", uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})})
public class User implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    /* CONSTRAINS AND VALIDATIONS APPLIED TO COLUMNS*/

    // User
    @NotEmpty
    @NotBlank
    @Column(name = "username", nullable = true)
    private String username;

    // Password
    @NotEmpty
    @NotBlank
    @Column(name = "password", nullable = true)
    private String password;

    // Firstname
    @Column(name = "firstname", nullable = true)
    private String firstname;

    // Secondname
    @Column(name = "secondname", nullable = true)
    private String secondname;

    // Lastname
    @NotEmpty
    @NotBlank
    @Column(name = "lastname", nullable = true)
    private String lastname;

    // Second lastname
    @Column(name = "secondlastname", nullable = true)
    private String secondlastname;

    // Country
    @NotEmpty
    @NotBlank
    @Column(name = "country", nullable = true)
    private String country;

    // EmaiL
    @NotEmpty
    @NotBlank
    @Email
    @Column(name = "email", nullable = true)
    private String email;

    // User Role (ADMIN/USER)
    @Enumerated(EnumType.STRING)
    Role role;

    //Phone number
    @Pattern(regexp = "\\d{10}")
    private String phone;

    // Birthday
    @Past
    private Date birthday;

    // Points
    @Min(0)
    private int points;

    // User Nationality
    //@ManyToOne
    //@JoinColumn(name = "nationality")
    //private Countries nationality;

    // User Status?
    boolean active;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
