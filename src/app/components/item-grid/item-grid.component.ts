import { Component, OnInit } from '@angular/core';
import {ItemCardComponent} from "../../pages/shop/item-card/item-card.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-item-grid',
  templateUrl: './item-grid.component.html',
  styleUrls: ['./item-grid.component.scss'],
  imports: [
    CommonModule,
    ItemCardComponent
  ],
  standalone: true
})
export class ItemGridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
