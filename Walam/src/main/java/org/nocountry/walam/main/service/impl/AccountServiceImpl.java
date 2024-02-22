package org.nocountry.walam.main.service.impl;

//import org.nocountry.walam.main.model.dto.AccountDTO;
//import org.nocountry.walam.main.model.entity.Account;
//import org.nocountry.walam.main.model.mapper.AccountMapper;
//import org.nocountry.walam.main.service.AccountService;
//import org.springframework.stereotype.Service;
//
//
//@Service
//public class AccountServiceImpl extends AccountService implements
//        AccountMapper {
//    @Override
//    public AccountDTO accountToAccountDTO(Account account) {
//        return null;
//    }
//
//    @Override
//    public Account accountDTOToAccount(AccountDTO accountDTO) {
//        return null;
//    }
//}

import lombok.RequiredArgsConstructor;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.repository.AccountRepository;
import org.nocountry.walam.main.service.IAccountService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class AccountServiceImpl implements IAccountService {

    private final AccountRepository accountRepository;

    @Override
    public Account saveAccount(Account account) {
        return accountRepository.save(account);
    }

    @Override
    public void deleteAccountById(int id) {
        accountRepository.deleteById(id);
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @Override
    public Account getAccountById(int id) {
        return accountRepository.findById(id).orElse(null);
    }

}