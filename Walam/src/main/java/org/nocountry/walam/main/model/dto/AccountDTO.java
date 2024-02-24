package org.nocountry.walam.main.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.User;

import java.io.Serializable;

@Data
@Builder
public class AccountDTO implements Serializable {

    private Integer id;

    @NotBlank
    @Size(max = 20)
    @Pattern(regexp = "^[0-9]+$")
    private String numberAccount;

    @NotBlank
    @Size(max = 22)
    @Pattern(regexp = "^[0-9]+$")
    private String cvu;

    private Double balance;

    @Valid
    private User user;

}