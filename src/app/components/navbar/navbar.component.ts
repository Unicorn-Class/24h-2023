import { Component, OnInit } from '@angular/core';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import {Team} from "../../api/model/team";
import {TeamsService} from "../../api/api/teams.service";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    RouterLinkWithHref,
    RouterLinkActive
  ]
})
export class NavbarComponent implements OnInit {
  ourTeam!: Team;
  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.ourTeam = result;
    })
  }

}
