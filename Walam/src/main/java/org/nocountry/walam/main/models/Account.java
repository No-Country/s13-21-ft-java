package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.nocountry.walam.main.models.enums.AccountType;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@ToString
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Getter@Setter
    private int cvu;

    @Getter@Setter
    private String numberAccount;

    @Getter@Setter
    private double balance;

    @Getter@Setter
    private AccountType type;

    @Getter@Setter
    private boolean isActive;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private User user;

    @Getter
    @OneToMany (mappedBy = "account")
    private List<Transaction> transactions = new ArrayList<>();

    public Account(int cvu, String numberAccount, double balance, AccountType type, boolean isActive, User user) {
        this.cvu = cvu;
        this.numberAccount = numberAccount;
        this.balance = balance;
        this.type = type;
        this.isActive = isActive;
        this.user = user;
    }

    //ADD

    public void addTransaction(Transaction transaction){
        transaction.setAccount(this);
        transactions.add(transaction);
    }
}
