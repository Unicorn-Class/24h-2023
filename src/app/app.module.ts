import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ApiModule} from "./api/api.module";
import {HttpClientModule} from "@angular/common/http";
import {Configuration} from "./api/configuration";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShopComponent } from './pages/shop/shop.component';
import { HistoryComponent } from './components/history/history.component';

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
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    ApiModule.forRoot(AppModule.getConfiguration),
    DashboardComponent,
    ShopComponent,
    NavbarComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  static getConfiguration(): Configuration {
    return new Configuration(
      {
        username: 'unicorn-of-code',
        password: '7u4P3#Fo^7KN*fGp',
        withCredentials: true
      }
    );
  }

}
