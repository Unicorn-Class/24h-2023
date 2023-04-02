import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ShopComponent} from "./pages/shop/shop.component";
import { RacesComponent } from './pages/races/races.component';
import {AuthGuard} from "./guards/auth.guard";
import {SimulatorComponent} from "./pages/simulator/simulator.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shop',
    component: ShopComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'race',
    component: RacesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'simulator',
    component: SimulatorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
