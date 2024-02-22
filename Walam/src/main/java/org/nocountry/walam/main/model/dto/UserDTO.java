package org.nocountry.walam.main.model.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import java.io.Serializable;

@Data
@ToString
@Builder
public class UserDTO implements Serializable {

    Integer id;
    private String username;
    private String lastName;

    private String noIdentidad;

    @NotBlank
    @Email
    private String email;
    private String password;
}
