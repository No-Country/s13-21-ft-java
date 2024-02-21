package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.enums.TransactionType;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table(name = "transactions")
public class Transactions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @Column(name = "origin_account", nullable = false)
    private String originAccount;

    @NotNull
    @Column(name = "destiny_account", nullable = false)
    private String destinyAccount;

    @NotNull
    @DecimalMin(value = "0.01", message = "El monto debe ser mayor que cero")
    @DecimalMax(value = "9999999999.99", message = "El monto no puede ser mayor de 9999999999.99")
    private Double amount;

    @NotNull
    private LocalDateTime date;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private TransactionType type;

}
