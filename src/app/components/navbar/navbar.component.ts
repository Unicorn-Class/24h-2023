import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from '@angular/router';
import { Team } from '../../api/model/team';
import { TeamsService } from '../../api/api/teams.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLinkWithHref, RouterLinkActive],
})
export class NavbarComponent implements OnInit {
  ourTeam!: Team;

  constructor(public teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getById(11).subscribe((result) => {
      this.ourTeam = result;
    });
    this.konami(this.doKonamiAction);
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

  doKonamiAction(){
    console.log('GG WP')
  }
}
