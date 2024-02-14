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
public class UserPrize {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Getter@Setter
    private LocalDateTime date;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private User user;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private Prize prize;

    public UserPrize(User user, Prize prize){
        this.user = user;
        this.prize = prize;
        this.date = LocalDateTime.now();
    }
}
