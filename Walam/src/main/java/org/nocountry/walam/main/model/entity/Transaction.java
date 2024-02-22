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
@Table(name = "transaction")
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "origin_account_id", nullable = false) // Especifica el nombre de la columna de clave foránea
    private Account originAccount; // Cambia el tipo de datos a Account

    @ManyToOne
    @JoinColumn(name = "destiny_account_id", nullable = false) // Especifica el nombre de la columna de clave foránea
    private Account destinyAccount; // Cambia el tipo de datos a Account

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

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

}
