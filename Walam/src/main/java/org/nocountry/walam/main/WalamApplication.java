package org.nocountry.walam.main;

import org.mapstruct.MapperConfig;
import org.nocountry.walam.main.model.entity.Account;
import org.nocountry.walam.main.model.mapper.AccountMapper;
import org.nocountry.walam.main.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WalamApplication {


    public static void main(String[] args) {
        SpringApplication.run(WalamApplication.class, args);

    }

}
