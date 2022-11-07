import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://localhost:8080/realms/master/',
          realm: 'master',
          clientId: 'master-realm',
        }
      });
}