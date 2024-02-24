package org.nocountry.walam.main.model.repository;

import org.nocountry.walam.main.model.entity.Countries;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountrieRepository extends JpaRepository<Countries, Integer> {
}
