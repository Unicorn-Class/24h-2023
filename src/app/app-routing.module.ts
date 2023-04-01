import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ShopComponent} from "./pages/shop/shop.component";
import { HistoryComponent } from './components/history/history.component';
import { RacesComponent } from './pages/races/races.component';
import {StatisticsComponent} from "./pages/statistics/statistics.component";
import {AuthGuard} from "./guards/auth.guard";

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
    path: 'history',
    component: HistoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'race',
    component: RacesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
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
