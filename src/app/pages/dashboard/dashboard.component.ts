import { ItemSellRequest } from './../../api/model/itemSellRequest';
import { ItemsService } from './../../api/api/items.service';
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
     public teamInventory : TeamInventoryService,
     public itemsService : ItemsService
     ) {
  }

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.ourTeam = result;

      this.fetchStatus = 'success';
    })
    this.getInventory();
  }

  equipItem(item: Item) {
    if (item.id) {
      this.teamInventory.equipItemInInventory(11,item.id).subscribe(result => {
        if (result.code === 'OK') {
          this.toastr.success('Equipement ok')
          this.getInventory();
        } else {
          this.toastr.error(result.message)
        }
      })
    }
  }

  sellItem(item: Item) {
    if (item.id) {
      let itemRequest : ItemSellRequest = {
        itemId : item.id,
        price : 9999
      }
      this.itemsService.sellToMarketplace(itemRequest,11).subscribe(result => {
        if (result.code === 'OK') {
          this.toastr.success('Vente ok')
          this.getInventory();
        } else {
          this.toastr.error(result.message)
        }
      })
    }
  }


  getInventory() {

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


}
