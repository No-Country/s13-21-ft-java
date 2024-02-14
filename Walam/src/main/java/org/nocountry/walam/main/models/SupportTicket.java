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
public class SupportTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    private long id;

    @Getter@Setter
    private String title;

    @Getter@Setter
    private String body;

    @Getter@Setter
    private LocalDateTime date;

    @Getter@Setter
    private String status;

    @Getter@Setter
    private String email;

    @Getter@Setter
    @ManyToOne (fetch = FetchType.EAGER)
    private User user;

    public SupportTicket(String title, String body, LocalDateTime date, String status, String email) {
        this.title = title;
        this.body = body;
        this.date = date;
        this.status = status;
        this.email = email;
    }
}
