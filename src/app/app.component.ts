import {Component, OnInit} from '@angular/core';
import {TeamsService} from "./api/api/teams.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '24h-2023';

  constructor(public teamsService: TeamsService) {
  }

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe(result => {
      console.log('Teams : ',result)
    })
  }
}
