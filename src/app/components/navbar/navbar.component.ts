import { Component, OnInit } from '@angular/core';
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";

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

  constructor() { }

  ngOnInit(): void {
  }

}
