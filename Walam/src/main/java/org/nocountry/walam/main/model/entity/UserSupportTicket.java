package org.nocountry.walam.main.model.entity;

import jakarta.persistence.*;
<<<<<<< HEAD
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;
import org.nocountry.walam.main.model.entity.enums.TicketState;

import java.time.LocalDateTime;

=======
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.nocountry.walam.main.model.entity.enums.TicketState;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
@Data
@Builder
@Entity
@Table(name = "user_support_ticket")
public class UserSupportTicket {

    @Id
<<<<<<< HEAD
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
=======
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

>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
    @Enumerated(EnumType.STRING)
    @Column(name = "state", nullable = false)
    private TicketState state;

<<<<<<< HEAD
    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User owner;

=======
    @Column(nullable = false)
    private String email;
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
}
