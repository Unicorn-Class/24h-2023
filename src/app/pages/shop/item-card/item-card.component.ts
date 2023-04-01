import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Item} from "../../../api/model/item";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
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
  @Input() item!: Item;
  @Output() buyItem = new EventEmitter();
  @Output() equipItem = new EventEmitter();
  @Input() displayButtonBuy = true;
  @Input() displayButtonEquip = false;
  @Input() isEquipped !: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
