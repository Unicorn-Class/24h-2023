import { Component, OnInit } from '@angular/core';
import {Team} from "../../api/model/team";
import {TeamsService} from "../../api/api/teams.service";
import {TeamInventoryService} from "../../api/api/teamInventory.service";
import {CommonModule} from "@angular/common";
import { TeamInventory } from 'src/app/api/model/teamInventory';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  ourTeam!: Team;
  ourTeamInventory!: TeamInventory;
  faCheck = faCheckCircle;
  constructor(public teamsService: TeamsService, public teamInventory : TeamInventoryService) {
  }

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.ourTeam = result;
      this.fetchStatus = 'success';
    })

    this.teamInventory.getTeamInventory(11).subscribe(result => {
      this.ourTeamInventory = result;
      this.fetchStatus = 'success';
    })
  }

}
