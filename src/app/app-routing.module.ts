import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ShopComponent} from "./pages/shop/shop.component";
import { HistoryComponent } from './components/history/history.component';
import { RacesComponent } from './pages/races/races.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'race',
    component: RacesComponent
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
