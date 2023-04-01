import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flat-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flat-button.component.html',
  styleUrls: ['./flat-button.component.scss']
})
export class FlatButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
