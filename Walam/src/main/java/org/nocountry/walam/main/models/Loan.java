package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@ToString
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Setter@Getter
    private String loanName;

    @Setter@Getter
    private double amount;

    @Setter@Getter
    private int payments;

    @Setter@Getter
    private double interests;

    @Setter@Getter
    private boolean isActive;

    @Setter@Getter
    @ManyToOne (fetch = FetchType.EAGER)
    private UserLoan userLoan;

    public Loan(String loanName, double amount, int payments, double interests, boolean isActive) {
        this.loanName = loanName;
        this.amount = amount;
        this.payments = payments;
        this.interests = interests;
        this.isActive = isActive;
    }
}
