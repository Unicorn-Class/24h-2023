import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiModule} from "./api/api.module";
import {HttpClientModule} from "@angular/common/http";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShopComponent } from './pages/shop/shop.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { StatBarComponent } from './components/stat-bar/stat-bar.component';
import {AuthService} from "./services/auth.service";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://185.98.136.60:8080',
        realm: 'codelemans',
        clientId: 'app-defi-24h'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      }
    });
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    ApiModule,
    DashboardComponent,
    FontAwesomeModule,
    ShopComponent,
    NavbarComponent,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    StatBarComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
