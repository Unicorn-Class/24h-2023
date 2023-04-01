import { TeamInventoryService } from './../../api/api/teamInventory.service';
import {Component, inject, OnInit} from '@angular/core';
import {Team} from "../../api/model/team";
import {TeamsService} from "../../api/api/teams.service";
import {CommonModule} from "@angular/common";
import {TeamInventory } from 'src/app/api/model/teamInventory';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {ItemCardComponent} from "../shop/item-card/item-card.component";
import { Item } from 'src/app/api/model/item';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    CommonModule,
    ItemCardComponent,
    FontAwesomeModule
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  ourTeam!: Team;
  ourTeamInventory!: TeamInventory;
  private toastr: ToastrService = inject(ToastrService);
  constructor(public teamsService: TeamsService,
     public teamInventory : TeamInventoryService
     ) {
  }

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.ourTeam = result;

      this.fetchStatus = 'success';
    })

    this.teamInventory.getTeamInventory(11).subscribe(result => {
      this.ourTeamInventory = result;

      for(let item of this.ourTeamInventory.items!){
        if(item.item?.image){
          item.item.image = `/assets/images/${item.item?.image?.substring(16)}.png`;
        }

      }

      this.fetchStatus = 'success';
    })
  }

  equipItem(item: Item) {
    if (item.id) {
      this.teamInventory.equipItemInInventory(item.id, 11).subscribe(result => {
        if (result.code === 'OK') {
          this.toastr.success('Equipement ok')
        } else {
          this.toastr.error(result.message)
        }
      })
    }
  }


}
