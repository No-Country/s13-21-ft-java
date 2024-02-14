package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@NoArgsConstructor
@ToString
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    //private CardType type;

    @Getter@Setter
    private String destinyAccount;

    @Getter@Setter
    private String originAccount;

    @Getter@Setter
    private double amount;

    @Getter@Setter
    private LocalDateTime date;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private Account account;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private Card card;

    public Transaction(String destinyAccount, String originAccount, double amount, LocalDateTime date) {
        this.destinyAccount = destinyAccount;
        this.originAccount = originAccount;
        this.amount = amount;
        this.date = date;
    }
}
