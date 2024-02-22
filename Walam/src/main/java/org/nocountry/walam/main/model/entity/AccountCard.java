package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Data
@Builder
@Entity
public class AccountCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank(message = "El número de tarjeta no puede estar en blanco")
    @Size(min = 16, max = 16, message = "El número de tarjeta debe tener 16 dígitos")
    private String cardNumber;

    @NotNull(message = "El CVV no puede ser nulo")
    @Min(value = 100, message = "El CVV debe tener al menos 3 dígitos")
    @Max(value = 9999, message = "El CVV debe tener máximo 4 dígitos")
    private Integer cvv;

    @NotNull(message = "La fecha de creación no puede ser nula")
    private LocalDate creationDate;

    @NotNull(message = "La fecha de expiración no puede ser nula")
    @Future(message = "La fecha de expiración debe ser en el futuro")
    private LocalDate expirationDate;

    private boolean isActive;

    @OneToOne
    @JoinColumn(name = "owner_id")
    private User owner;

}
