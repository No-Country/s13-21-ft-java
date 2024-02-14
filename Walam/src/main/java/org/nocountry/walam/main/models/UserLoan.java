package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@ToString
public class UserLoan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Getter@Setter
    private double amount;

    @Getter@Setter
    private int payment;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private User user;

    @Getter
    @OneToMany (mappedBy = "userLoan")
    private List<Loan> loans = new ArrayList<>();

    public UserLoan(double amount, int payment) {
        this.amount = amount;
        this.payment = payment;
    }

    //ADD

    public void addLoan(Loan loan){
        loan.setUserLoan(this);
        loans.add(loan);
    }
}
