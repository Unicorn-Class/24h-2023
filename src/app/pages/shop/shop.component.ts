import {Component, inject, OnInit} from '@angular/core';
import {ItemsService} from "../../api/api/items.service";
import {Item, ItemShopUI} from "../../api/model/item";
import {ItemCardComponent} from "./item-card/item-card.component";
import {CommonModule} from "@angular/common";
import {ToastrService} from "ngx-toastr";
import {FormsModule} from "@angular/forms";
import {TeamsService} from "../../api/api/teams.service";
import {TeamInventoryService} from "../../api/api/teamInventory.service";
import {forkJoin, Observable} from "rxjs";

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  imports: [
    CommonModule,
    FormsModule,
    ItemCardComponent
  ],
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private itemService: ItemsService = inject(ItemsService);
  private teamInventoryService: TeamInventoryService = inject(TeamInventoryService);
  private toastr: ToastrService = inject(ToastrService);
  fetchStatus: 'loading' | 'success' = 'loading';
  itemList: (Item & ItemShopUI)[] = [];
  displayedItemList: (Item & ItemShopUI)[] = [];
  searchQuery: string = "";

  constructor() { }

  ngOnInit(): void {
    const items$ = this.itemService.search({availableOnly: true});
    const inventory$ = this.teamInventoryService.getTeamInventory(11);
    forkJoin({items: items$, inventory: inventory$}).subscribe(result => {
      this.itemList = result.items.map(item => {
        return {
          ...item,
          image: `/assets/images/${item.image?.substring(16)}.png`,
          alreadyInInventory: !!result.inventory.items?.find(invItem => invItem?.item?.id === item.id)
        }
      });
      this.displayedItemList = [...this.itemList].sort( (a,b) =>
        (a.sellingPrice ?? 0) - (b.sellingPrice ?? 0)
      );
      this.fetchStatus = 'success';
    })
  }

  buyItem(item: Item) {
    if (item.id) {
      this.itemService.buy(item.id, 11).subscribe(result => {
        if (result.code === 'OK') {
          this.toastr.success('Achat effectué')
        } else {
          this.toastr.error(result.message)
        }
      })
    }
  }

  search($event: string) {
    this.displayedItemList = this.itemList.filter(item => item.name?.toLowerCase().includes($event.toLowerCase()));
  }
}
