package org.nocountry.walam.main.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.enums.Role;

import java.io.Serializable;
import java.util.Date;

@Data
@Builder
public class UserDTO implements Serializable {

    private Integer id;

    @Min(3)
    private String username;

    @Min(3)
    private String lastName;

    @Min(10)
    private String noIdentidad;

    @NotBlank
    @Email
    private String email;

    @Min(8)
    @NotBlank
    private String password;

    @Valid
    private Country country;

    @Min(10)
    @Pattern(regexp = "^[0-9]+$")
    private String phone;

    @Past
    private Date birthday;

    @NotNull
    @AssertTrue
    private boolean active;
    private Role role;

    @Valid
    private AccountDTO account;
}
