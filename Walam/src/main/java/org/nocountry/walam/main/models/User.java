package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.GenericGenerator;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Setter@Getter
    private String name;

    @Setter@Getter
    private String lastName;

    @Setter@Getter
    private String email;

    @Setter@Getter
    private String password;

    @Setter@Getter
    private String phone;

    @Setter@Getter
    private String birthdate;

    @Setter@Getter
    private String nationality;

    @Setter@Getter
    private int points;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private UserType userType;

    @Getter
    @OneToMany (mappedBy = "user")
    private List<Account> accounts = new ArrayList<>();

    @Getter
    @OneToMany (mappedBy = "user")
    private List<Card> cards = new ArrayList<>();

    @Setter@Getter
    @ManyToOne (fetch = FetchType.EAGER)
    private Membership membership;

    @Getter
    @OneToMany (mappedBy = "user")
    private List<UserPrize> userPrizes = new ArrayList<>();

    @Getter
    @OneToMany (mappedBy = "user")
    private List<UserLoan> userLoans = new ArrayList<>();

    @Getter
    @OneToMany (mappedBy = "user")
    private List<SupportTicket> supportTickets = new ArrayList<>();

    public User (String name, String lastName, String email, String password, String phone, String birthdate, String nationality) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.birthdate = birthdate;
        this.nationality = nationality;
    }

    //ADD

    public void addAccounts(Account account){
        account.setUser(this);
        accounts.add(account);
    }

    public void addCards(Card card){
        card.setUser(this);
        cards.add(card);
    }

    public void addUserPrize(UserPrize userPrize){
        userPrize.setUser(this);
        userPrizes.add(userPrize);
    }

    public void addUserLoan(UserLoan userLoan){
        userLoan.setUser(this);
        userLoans.add(userLoan);
    }

    public void addSupportTicket(SupportTicket supportTicket){
        supportTicket.setUser(this);
        supportTickets.add(supportTicket);
    }
}
