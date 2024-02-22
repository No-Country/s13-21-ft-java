package org.nocountry.walam.main.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String username;
    private String lastName;
    private String noIdentidad;
    private String email;
    private String password;
    private Integer countryId;
    private String phone;
    private Date birthday;
}
