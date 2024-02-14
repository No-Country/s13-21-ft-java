package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.nocountry.walam.main.models.enums.MembershipType;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@ToString
public class Membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Setter@Getter
    private String name;

    @Setter@Getter
    private MembershipType type;

    @Setter@Getter
    private int requiredPoints;

    @Getter
    @OneToMany (mappedBy = "membership")
    private List<Prize> prizes = new ArrayList<>();

    @Getter
    @OneToMany (mappedBy = "membership")
    private List<User> users = new ArrayList<>();

    public Membership(String name, MembershipType type, int requiredPoints) {
        this.name = name;
        this.type = type;
        this.requiredPoints = requiredPoints;
    }

    //ADD

    public void addPrize(Prize prize){
        prize.setMembership(this);
        prizes.add(prize);
    }

    public void addUser(User user){
        user.setMembership(this);
        users.add(user);
    }
}
