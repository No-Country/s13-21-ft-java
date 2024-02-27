package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.entity.Account;

import java.util.List;

public interface AccountService {

    Account saveAccount(Account account);
    void deleteAccountById(int id);
    List<Account> getAllAccounts();
    Account getAccountById(int id);

    /* MAPPER EXAMPLE */
    AccountDTO mapAccountToDTO(Account account);
    Account mapDTOToAccount(AccountDTO accountDTO);


<<<<<<< HEAD

    // Otras operaciones si es necesario.
=======
    // Otras operaciones si es necesario.

    boolean existsByNumberAccount(String numberAccount);
>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb

    boolean existsByCvu(String cvu);
    
}
