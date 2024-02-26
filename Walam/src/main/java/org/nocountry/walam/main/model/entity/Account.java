package org.nocountry.walam.main.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
<<<<<<< HEAD
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

import java.util.List;

=======
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
@Data
@Builder
@Entity
@Table(name = "account")
public class Account {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

<<<<<<< HEAD
    @Column(name = "number_account", nullable = false, unique = true)
    @Size(max = 20)
    @NotBlank
=======
    @Column(name = "number_account", nullable = false, unique = true, updatable = false, length = 20)
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
    private String numberAccount;

    @Column(nullable = false, unique = true, updatable = false, length = 22)
    private String cvu;

<<<<<<< HEAD
    @NotNull
    @Column(nullable = false)
    private Double balance;

    @OneToOne
    @JoinColumn(name = "owner_id", referencedColumnName = "id")
    private User owner;

    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Transaction> transactions;
=======
    @Column(precision = 11, nullable = false)
    private Double balance;

    @OneToOne(mappedBy = "account")
    private User user;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "account")
    private List<Transaction> transactions = new ArrayList<>();
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

    //ADD
    public void addTransaction(Transaction transaction){
        transaction.setAccount(this);
        this.transactions.add(transaction);
    }
}
