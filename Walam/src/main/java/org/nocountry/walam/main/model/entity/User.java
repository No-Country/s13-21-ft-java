package org.nocountry.walam.main.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
<<<<<<< HEAD
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
=======
import jakarta.validation.constraints.Email;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.nocountry.walam.main.model.entity.enums.Role;
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;

<<<<<<< HEAD
//import lombok.EqualsAndHashCode;
=======
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
<<<<<<< HEAD
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

=======
@SQLDelete(sql = "UPDATE users SET active = 0 WHERE id=?" )
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name", length = 25)
    private String username;

    @Column(name = "lastname", length = 20)
    private String lastName;

    @Column(name = "no_identidad", length = 15, unique = true)
    private String noIdentidad;

    @Email
    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "country_id") // Nombre correcto de la columna de clave foránea en la tabla users
    private Country country;

    @Column(name = "phone", length = 12)
    private String phone;

    @Column(name = "birth_date")
    private Date birthday;

    @Column(name = "active", columnDefinition = "BOOLEAN default true", nullable = false)
    private boolean active;

    @Column(name = "rol", columnDefinition = "varchar(5) default 'USER'")
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "account")
    @JsonIgnore
    private Account account;
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

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
