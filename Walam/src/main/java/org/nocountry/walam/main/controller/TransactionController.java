package org.nocountry.walam.main.controller;

import jakarta.validation.Valid;
import org.nocountry.walam.main.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


@RestController
@Validated
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    TransactionService transactionService;

    /**
     * Obtiene un usuario por su ID.
     *
     * @param transactionRequest the entity that has the account number and amount.
     * @return ResponseEntity with the message of success or wrong.
     */
    @PostMapping("/transfer")
    public ResponseEntity transferToAccount(@Valid @RequestBody TransactionRequest transactionRequest){
        return transactionService.transferToAccount(transactionRequest);
    }

    /**
     * Withdraw the amount.
     *
     * @param withdraw the entity that has the amount to withdraw.
     * @return ResponseEntity with the message of success or wrong.
     */
    @PostMapping("/withdraw")
    public ResponseEntity withdraw(@Valid @RequestBody WithdrawOrDepositRequest withdraw ){
        return transactionService.withdraw(withdraw);
    }

    /**
     * Withdraw the amount.
     *
     * @param deposit the entity that has the amount to deposit.
     * @return ResponseEntity with the message of success or wrong.
     */
    @PostMapping("/deposit")
    public ResponseEntity deposit(@Valid @RequestBody WithdrawOrDepositRequest deposit){
        return transactionService.deposit(deposit);
    }
}
