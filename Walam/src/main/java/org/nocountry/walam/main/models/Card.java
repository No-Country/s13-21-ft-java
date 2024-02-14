package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@ToString
public class Card {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Getter@Setter
    private String cardNumber;

    @Getter@Setter
    private int cvv;

    @Getter@Setter
    private LocalDate creationDate;

    @Getter@Setter
    private LocalDate expirationDate;

    @Getter@Setter
    private String fullName;

    @Getter@Setter
    private boolean isActive;

    @Getter
    @OneToMany (mappedBy = "card")
    private List<Transaction> transactions = new ArrayList<>();

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private User user;

    public Card(String cardNumber, int cvv, LocalDate creationDate, LocalDate expirationDate, String fullName, boolean isActive) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.creationDate = creationDate;
        this.expirationDate = expirationDate;
        this.fullName = fullName;
        this.isActive = isActive;
    }

    //ADD

    public void addTransaction(Transaction transaction){
        transaction.setCard(this);
        transactions.add(transaction);
    }
}
