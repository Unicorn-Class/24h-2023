import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Item, ItemShopUI} from "../../../api/model/item";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faMoneyBill, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class ItemCardComponent implements OnInit {
  faCheck = faCheckCircle;
  faMoneyBill = faMoneyBill;
  faInfoCircle = faInfoCircle;
  @Input() item!: Item & ItemShopUI;
  @Output() buyItem = new EventEmitter();
  @Output() equipItem = new EventEmitter();
  @Output() sellItem = new EventEmitter();
  @Input() displayButtonBuy = true;
  @Input() displayButtonEquip = false;
  @Input() displayButtonSell = false;
  @Input() isEquipped !: boolean;
  displayImage = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeDisplay() {
    this.displayImage = !this.displayImage;
  }

}
