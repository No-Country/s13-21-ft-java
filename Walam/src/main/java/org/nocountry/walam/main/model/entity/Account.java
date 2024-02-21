package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name = "account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "number_account", nullable = false, unique = true)  // No puede ser nulo en la base de datos | Y Debe ser único en la tabla.
    @Size(max = 20)  // Limita el tamaño máximo de numberAccount a 20 caracteres.
    @NotBlank  // Garantiza que numberAccount y cvu no estén en blanco (vacíos) ni contengan solo espacios en blanco.
    private String numberAccount;

    @Column(nullable = false, unique = true)
    @Size(max = 22)
    @NotBlank
    private String cvu;

    @NotNull  // Asegura que balance no sea nulo.
    @Column(nullable = false)
    private Double balance;

    @OneToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private Users user;



}
