package org.nocountry.walam.main.model.entity;

import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Data
@Builder
@Entity
@Table(name = "customers")
public class Customers {

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
  
}
