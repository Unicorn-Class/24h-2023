import { Component, OnInit } from '@angular/core';
import {Team} from "../../api/model/team";
import {TeamsService} from "../../api/api/teams.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  ourTeam!: Team;

  constructor(public teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.ourTeam = result;
      this.fetchStatus = 'success';
    })
  }

}
