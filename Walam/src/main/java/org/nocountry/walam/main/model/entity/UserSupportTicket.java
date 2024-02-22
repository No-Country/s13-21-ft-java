package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.enums.TicketState;

import java.time.LocalDateTime;

@Data
@Builder
@Entity
@Table(name = "user_support_ticket")
public class UserSupportTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotBlank
    @Size(max = 25)
    private String title;

    @NotBlank
    @Size(max = 200)
    private String body;

    @NotNull
    private LocalDateTime date;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private TicketState state;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

}
