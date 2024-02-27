package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.model.entity.User;
import org.nocountry.walam.main.model.repository.AccountRepository;
import org.nocountry.walam.main.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    UserRepository userRepository;

    @Autowired
    AccountRepository accountRepository;
    @GetMapping("/user-info")
    public String getUserInfo(){
        // return "user-info";
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if(authentication != null ){
            Object principal = authentication.getPrincipal();
            if(principal instanceof UserDetails){
                String userName = ((UserDetails) principal).getUsername();
                User userInDb = userRepository.findByUsername(userName).get();
                return userInDb.getAccount().getNumberAccount();
            } else {
                return "principal instanceof";
            }
        }
        return null;

    }

    @PostMapping("/transfer-to/{accountId}")
    public String transferToAnotherAccount(@PathVariable String accountId){
       if( accountRepository.existsByNumberAccount(accountId)){
           // Deposit to account destination
            return "Depositado";
        } else{
           return "The account does not exist";
        }
    }

    @GetMapping("/user-name")
    public String getUserLogged(){
        String authUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        System.out.println("USERNAME : " + authUsername );
//        UserEntity userLogged = userRepository.findByUsername(authUsername)
//                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        return "Este es el nombre " + authUsername;
    }
}
