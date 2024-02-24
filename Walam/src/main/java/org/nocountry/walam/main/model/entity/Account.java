package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "account")
public class Account {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "number_account", nullable = false, unique = true, updatable = false, length = 20)
    private String numberAccount;

    @Column(nullable = false, unique = true, updatable = false, length = 22)
    private String cvu;

    @NotNull
    @Column(nullable = false)
    private Double balance;

    @OneToOne(mappedBy = "account")
    private User user;


    @OneToMany(fetch = FetchType.LAZY, mappedBy = "destinyAccount")
    private List<Transaction> destinyTransaction;

}
