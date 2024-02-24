package org.nocountry.walam.main.service.impl;

import org.nocountry.walam.main.model.entity.Country;
import org.nocountry.walam.main.model.repository.CountryRepository;
import org.nocountry.walam.main.service.ICountry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CountryService implements ICountry {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional(readOnly = true)
    @Override
    public List<Country> listAll() {
        return (List<Country>) countryRepository.findAll();
    }

    @Override
    public Country findById(Integer id) {
        return countryRepository.findById(id).orElse(null);
    }
}
