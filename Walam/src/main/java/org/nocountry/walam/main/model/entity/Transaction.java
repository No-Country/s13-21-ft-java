package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.nocountry.walam.main.model.entity.enums.TransactionType;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;


    private Double amount;

    @NotNull
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime date;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private TransactionType type;

    /**
     * Atributo relacionado a la cuenta de destino
     */
    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

}
