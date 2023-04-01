import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./api/api/teams.service";
import {Team} from "./api/model/team";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '24h-2023';

  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  ourTeam!: Team;

  constructor(public teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.fetchStatus = 'success';
      this.ourTeam = result;
    })
  }
}
