package org.nocountry.walam.main.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Servicio para la generación de tokens JWT.
 */
@Service
public class JwtService {

    // Clave secreta para la firma del token
    private static final String SECRET_KEY ="3123E123123123123123123F1231234564564564564565G456456456456";

    /**
     * Genera un token JWT para el usuario proporcionado.
     * @param userdetails Detalles del usuario para el cual se genera el token.
     * @return Token JWT generado.
     */
    public String getToken(UserDetails userdetails) {
        // Llama al método interno getToken con reclamaciones adicionales vacías
        return getToken(new HashMap<>(), userdetails);
    }

    /**
     * Genera un token JWT con reclamaciones adicionales y detalles del usuario.
     * @param extraClaims Reclamaciones adicionales a incluir en el token.
     * @param userDetails Detalles del usuario para el cual se genera el token.
     * @return Token JWT generado.
     */
    private String getToken(Map<String, Object> extraClaims, UserDetails userDetails) {
        // Construye y firma el token JWT con las reclamaciones y detalles del usuario
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60* 60 * 3)) // Token válido por 3 horas
                .signWith(getKey())//SignatureAlgorithm.HS256
                .compact();
    }

    /**
     * Obtiene la clave para firmar el token a partir de la clave secreta.
     * @return Clave para la firma del token.
     */
    private Key getKey() {
        // Convierte la clave secreta en bytes y crea una clave HMAC para la firma
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username=getUsernameFromToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    public String getUsernameFromToken(String token) {
        return getClaim(token, Claims::getSubject);
    }

    private Claims getAllClaims(String token){
        return Jwts.parser()//  parserBuilder() parece estar obsoleto?
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public <T>  T getClaim(String token, Function<Claims, T> claimsResolver){
        final Claims claims = getAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Date getExpiration(String token){
        return getClaim(token, Claims::getExpiration);
    }

    private boolean isTokenExpired(String token){
        return getExpiration(token).before(new Date());
    }
}

