
package com.portfolio.Leandro.auth;

import java.util.Collection;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    
    private String token;
    private String userName;
    private Collection<? extends GrantedAuthority> authorities;
    
}
