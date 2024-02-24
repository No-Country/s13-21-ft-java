package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.nocountry.walam.main.model.entity.enums.TicketState;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name = "user_support_ticket")
public class UserSupportTicket {

    @Id
    @Setter(AccessLevel.NONE)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title", length = 25)
    private String title;

    @Column(name = "body", length = 200)
    private String body;

    @CreationTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    @Column(name = "date", updatable = false)
    private LocalDateTime date;

    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private TicketState state;

}
