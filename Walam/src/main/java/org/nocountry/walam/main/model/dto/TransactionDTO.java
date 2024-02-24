package org.nocountry.walam.main.model.dto;

import lombok.Builder;
import lombok.Data;
import java.time.LocalDateTime;

@Data
@Builder
public class TransactionDTO {

    private int id;
    private String originAccount;
    private String destinyAccount;
    private Double amount;
    private LocalDateTime date;
    private String type;
    private int accountId; // Assuming you want to map the account's ID.

}

