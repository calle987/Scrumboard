FROM quay.io/keycloak/keycloak:20.0.1

# Make the realm configuration available for import
COPY master-realm.json /opt/keycloak_import/

# Import the realm and user
RUN /opt/keycloak/bin/kc.sh import --file /opt/keycloak_import/master-realm.json

# Import the realm on start-up
CMD ["start-dev"]