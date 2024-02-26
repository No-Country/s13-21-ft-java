package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
<<<<<<< HEAD
import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.enums.TransactionType;

import java.time.LocalDateTime;

=======
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.nocountry.walam.main.model.entity.enums.TransactionType;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
@Data
@Builder
@Entity
@Table(name = "transaction")
public class Transaction {

    @Id
<<<<<<< HEAD
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
=======
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(precision = 11)
    private Double amount;

    @CreationTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private LocalDateTime date;

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
    @Enumerated(EnumType.STRING)
    @Column(name = "type", nullable = false)
    private TransactionType type;

<<<<<<< HEAD
=======
    /**
     * Atributo relacionado a la cuenta de destino
     */
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    private Account account;

}
