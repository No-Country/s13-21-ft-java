package org.nocountry.walam.main.model.entity;

import java.io.Serializable;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

@Data
@Builder
//@AllArgsConstructor
//@NoArgsConstructor
@Entity
@Table(name = "countries")
public class Countries implements Serializable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 25, unique = true)
    private String name;

    @JsonIgnore
    @OneToMany(targetEntity = User.class, fetch = FetchType.LAZY, mappedBy = "country")
    private List<User> users;
}
