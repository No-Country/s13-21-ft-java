package org.nocountry.walam.main.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.nocountry.walam.main.models.enums.PrizeType;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@ToString
public class Prize {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Setter@Getter
    private String name;

    @Setter@Getter
    private String description;

    @Setter@Getter
    private PrizeType type;

    @Setter@Getter
    private int requiredPoints;

    @Setter@Getter
    private int stock;

    @Setter@Getter
    @ManyToOne (fetch = FetchType.EAGER)
    private Membership membership;

    @Getter
    @OneToMany (mappedBy = "prize")
    private List<UserPrize> userPrizes = new ArrayList<>();

    public Prize(String name, String description, PrizeType type, int requiredPoints, int stock) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.requiredPoints = requiredPoints;
        this.stock = stock;
    }

    //ADD

    public void addUserPrize(UserPrize userPrize){
        userPrize.setPrize(this);
        userPrizes.add(userPrize);
    }
}
