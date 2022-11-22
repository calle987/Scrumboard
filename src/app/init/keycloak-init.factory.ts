import { KeycloakService } from "keycloak-angular";
import * as Keycloak from "keycloak-js";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080',
          realm: 'master',
          clientId: 'angular_spa',
          
        },
        initOptions: {
    
          pkceMethod: 'S256', 
          // must match to the configured value in keycloak
          redirectUri: 'http://localhost:4200/',   
          // this will solved the error 
          checkLoginIframe: true
        }
      });
}