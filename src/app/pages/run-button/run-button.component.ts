import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RacesService } from 'src/app/api/api/races.service';
import { RunResult } from 'src/app/api/model/runResult';

@Component({
  selector: 'run-button',
  standalone: true,
  templateUrl: './run-button.component.html',
  styleUrls: ['./run-button.component.scss'],
  imports: [
    FormsModule,
    NgIf
  ]
})
export class RunButtonComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  raceResult!: RunResult;
  raceNumber: number = 1;

  constructor(public racesService: RacesService) { }

  ngOnInit(): void {
  }

  onStart(): void {
    this.racesService.run(this.raceNumber, 11).subscribe(result => {
      this.fetchStatus = 'success';
      this.raceResult = result;
    })
  }

}
