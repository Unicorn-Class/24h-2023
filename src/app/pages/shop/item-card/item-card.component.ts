import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Item, ItemShopUI} from "../../../api/model/item";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ItemCardComponent implements OnInit {

  @Input() item!: Item & ItemShopUI;
  @Output() buyItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}