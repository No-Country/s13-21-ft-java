package org.nocountry.walam.main.model.entity.enums;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum Country {

    @JsonProperty("Sin asignar")
    SIN_ASIGNAR,
    @JsonProperty("Argentina")
    ARGENTINA,
    @JsonProperty("Colombia")
    COLOMBIA,
    @JsonProperty("México")
    MÉXICO,
    @JsonProperty("Panamá")
    PANAMÁ,
    @JsonProperty("Costa Rica")
    COSTA_RICA;
    

}
