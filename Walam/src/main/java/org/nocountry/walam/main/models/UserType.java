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
public class UserType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Setter@Getter
    private String name;

    @Getter
    @OneToMany
    private List<User> users = new ArrayList<>();

    public UserType(String name) {
        this.name = name;
    }

    //ADD

    public void addUser(User user){
        user.setUserType(this);
        this.users.add(user);
    }
}
