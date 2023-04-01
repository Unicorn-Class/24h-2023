import {Component, inject, OnInit} from '@angular/core';
import {ItemsService} from "../../api/api/items.service";
import {Item} from "../../api/model/item";
import {ItemCardComponent} from "./item-card/item-card.component";
import {CommonModule} from "@angular/common";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-shop',
  standalone: true,
  templateUrl: './shop.component.html',
  imports: [
    CommonModule,
    ItemCardComponent
  ],
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private itemService: ItemsService = inject(ItemsService);
  private toastr: ToastrService = inject(ToastrService);
  fetchStatus: 'loading' | 'success' = 'loading';
  itemList: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.itemService.getAllItems().subscribe(itemList => {
      this.itemList = itemList.map(item => {
        return {
          ...item,
          image: `/assets/images/${item.image?.substring(16)}.png`
        }
      });
      this.fetchStatus = 'success';
      this.toastr.success('Items récupérés')
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

}
