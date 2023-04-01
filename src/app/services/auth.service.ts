import {inject, Injectable} from "@angular/core";
import {KeycloakService} from "keycloak-angular";
import jwtDecode from "jwt-decode";

@Injectable()
export class AuthService {

  private keycloakService: KeycloakService = inject(KeycloakService);

  constructor() {

  }

  async getDecodedToken(): Promise<any> {
    const token = await this.keycloakService.getToken();
    return jwtDecode(token) as any;
  }

  async getTeamId(): Promise<number> {
    const decodedToken = await this.getDecodedToken();
    return decodedToken.team_id;
  }
}
