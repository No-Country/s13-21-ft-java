package org.nocountry.walam.main.model.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;
import org.nocountry.walam.main.model.entity.User;

import java.io.Serializable;
import java.util.List;

@Data
@ToString
@Builder
public class CountriesDTO implements Serializable {

    Integer id;

    @NotBlank
    @Size(min = 5, max = 25)
    private String name;

    @Valid
    private List<User> users;
}
