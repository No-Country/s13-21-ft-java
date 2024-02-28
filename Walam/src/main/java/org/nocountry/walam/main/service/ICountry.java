package org.nocountry.walam.main.service;

import org.nocountry.walam.main.model.entity.Country;

import java.util.List;

public interface ICountry {

    List<Country> listAll();
    Country findById(Integer id);
}
