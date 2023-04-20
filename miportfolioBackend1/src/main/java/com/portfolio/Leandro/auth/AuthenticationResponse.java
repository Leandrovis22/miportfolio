
package com.portfolio.Leandro.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    
    private String token;
    private String role;
    private String authorities; //esto agregue para añadir las authorities del sistema al response builder de AuthenticationService
        
}
