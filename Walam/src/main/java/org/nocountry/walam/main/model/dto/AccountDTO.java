package org.nocountry.walam.main.model.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AccountDTO {

    private int id;
    private String numberAccount;
    private String cvu;
    private Double balance;
    private int userId; // Assuming you want to map the user's ID.

    // Add any other fields or methods if needed
}