import {Component, inject, OnInit} from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Team } from '../../api/model/team';
import { TeamsService } from '../../api/api/teams.service';
import {AuthService} from "../../services/auth.service";
import {CommonModule} from "@angular/common";
import {SpinnerComponent} from "../spinner/spinner.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faCoins, faTicketAlt} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkWithHref,
    RouterLinkActive,
    SpinnerComponent,
    FontAwesomeModule
  ]
})
export class NavbarComponent implements OnInit {
  ourTeam!: Team;
  fetchStatus: 'loading' | 'success' = 'loading';
  authService: AuthService = inject(AuthService);
  teamsService: TeamsService = inject(TeamsService);
  faCoins = faCoins;
  faTicket = faTicketAlt;

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe(result => {
      this.ourTeam = result;
      this.fetchStatus = 'success';
    })

    this.konami(this.doKonamiAction);

  }

  doKonamiAction(){
    console.log('GG WP')
    window.open("https://www.youtube.com/watch?v=aIVsz5Pj0eE", "_blank");
  }

  konami(callback: () => void): void {
    let codes: string[] = [
        'ArrowUp',
        'ArrowUp',
        'ArrowDown',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'ArrowLeft',
        'ArrowRight',
      ],
      position: number = 0;
    document.addEventListener('keydown', function (event: KeyboardEvent): void {
      if (event.code === codes[position]) {
        position++;
        if (position === codes.length) {
          position = 0;
          callback();
        }
      } else {
        position = 0;
      }
    });
  }
}
