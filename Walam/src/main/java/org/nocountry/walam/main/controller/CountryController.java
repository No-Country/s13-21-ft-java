package org.nocountry.walam.main.controller;

import org.nocountry.walam.main.config.ResponseMessage;
import org.nocountry.walam.main.model.dto.CountryDTO;
import org.nocountry.walam.main.model.entity.Country;
import org.nocountry.walam.main.service.ICountry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class CountryController {

    @Autowired
    private ICountry countryService;

    @GetMapping("countries")
    public ResponseEntity<?> showAll() {

        List<Country> getList = countryService.listAll();

        if (getList == null) {
            return new ResponseEntity<>(
                    ResponseMessage.builder().message("No existen paises registrados").object(null)
                            .build(), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(
                ResponseMessage.builder()
                        .message("").object(getList).build(), HttpStatus.OK);
    }

    @GetMapping("country/{id}")
    public ResponseEntity<?> showById(@PathVariable Integer id) {

        Country country =  countryService.findById(id);

        if (country == null) {

            return new ResponseEntity<>(
                    ResponseMessage.builder().message("El país que estás buscando no se encuentra registrado").object(null)
                            .build(), HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<>(
                ResponseMessage.builder().message("").object(CountryDTO.builder()
                        .id(country.getId())
                        .name(country.getName())
                        .build()).build(), HttpStatus.OK
        );
    }
}
