package org.nocountry.walam.main.model.entity;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
@Entity
@Table(name = "countries")
public class Country implements Serializable {
    
    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(length = 25, unique = true)
    private String name;

    @JsonIgnore
    @OneToMany(targetEntity = User.class, fetch = FetchType.LAZY, mappedBy = "country")
    private List<User> users;
}
