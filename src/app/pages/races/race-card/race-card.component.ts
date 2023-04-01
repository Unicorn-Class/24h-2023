import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Race} from "../../../api/model/race";

@Component({
  selector: 'app-race-card',
  templateUrl: './race-card.component.html',
  styleUrls: ['./race-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RaceCardComponent implements OnInit {

  @Input() race!: Race;

  constructor() { }

  ngOnInit(): void {
  }

}
