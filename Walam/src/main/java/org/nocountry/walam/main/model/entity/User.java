package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
@Builder
@Entity
@Table(name = "users")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  private String name;
  private String secondName;
  private String lastName;
  private String secondLastName;
  private String email;
  private String password;

  @ManyToOne
  @JoinColumn(name = "nationality")
  private Countries nationality;

  private String phone;
  private Date birthDate;
  private int points;
  // Accounts 1-n
  // SupportTickets 1-n
  // UserType 1-1
  // Memberships 1-n
  boolean active;

  @ManyToOne
  @JoinColumn(name = "country_id")
  private Countries country;

  @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
  private Account account;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<UserSupportTicket> supportTickets;

  @OneToOne(mappedBy = "user", cascade = CascadeType.ALL)
  private AccountCard accountCard;

}
