package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.Account;

import java.util.List;

public interface IAccountService {

    Account saveAccount(Account account);
    void deleteAccountById(int id);
    List<Account> getAllAccounts();
    Account getAccountById(int id);

    // Otras operaciones si es necesario.

}
