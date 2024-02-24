package org.nocountry.walam.main.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
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

    @Column(precision = 11, nullable = false)
    private Double balance;

    @OneToOne(mappedBy = "account")
    private User user;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "account")
    private List<Transaction> destinyTransaction;

}
