package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.dto.AccountDTO;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.mapper.AccountMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AccountService {

/*    public AccountDTO mapAccountToDTO(Account account)
    public Account mapDTOToAccount(AccountDTO accountDTO)*/

    public AccountDTO mapAccountToDTO(Account account) {
        return AccountMapper.INSTANCE.accountToAccountDTO(account);
    }

    public Account mapDTOToAccount(AccountDTO accountDTO) {
        return AccountMapper.INSTANCE.accountDTOToAccount(accountDTO);
    }



}
