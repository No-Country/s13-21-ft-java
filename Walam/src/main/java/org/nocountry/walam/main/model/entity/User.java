package org.nocountry.walam.main.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import lombok.*;
import org.hibernate.annotations.SQLDelete;
import org.nocountry.walam.main.model.entity.enums.Role;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@Builder
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
