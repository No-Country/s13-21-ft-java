<<<<<<< HEAD
package com.nocountry.pets.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    /*    @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/api/**")
                    .allowedOrigins("http://localhost:3000")
                    .allowedOrigins("https://pawdevelopment.vercel.app")
                    .allowedOrigins("*")
                    .allowedMethods("GET", "POST", "PUT", "DELETE")
                    .allowCredentials(true);
        }*/
    //CORS TOTALLY OPEN
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Permitir cualquier ruta
                .allowedOrigins("*")  // Permitir cualquier origen
                .allowedMethods("*")  // Permitir cualquier método HTTP
                .allowCredentials(false);  // No permitir credenciales
    }
}
=======
package org.nocountry.walam.main.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*"); // Permite todos los orígenes, cámbialo según tu configuración.
        config.addAllowedMethod("*"); // Permite todos los métodos HTTP (GET, POST, etc.)
        config.addAllowedHeader("*"); // Permite todos los encabezados.
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}


>>>>>>> 6bd9ce11d4c43be7734f8632da4808d9901c2ccb
