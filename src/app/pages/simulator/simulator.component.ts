import {CommonModule, NgIf} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RacesService } from 'src/app/api/api/races.service';
import { RunResult } from 'src/app/api/model/runResult';
import {Race} from "../../api/model/race";
import {catchError, forkJoin, of} from "rxjs";
import {SpinnerComponent} from "../../components/spinner/spinner.component";
import {FlatButtonComponent} from "../../components/flat-button/flat-button.component";
import {faClock, faCross, faMedal} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'simulator',
  standalone: true,
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    SpinnerComponent,
    FlatButtonComponent,
    FontAwesomeModule
  ]
})
export class SimulatorComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' | 'fetchResult' = 'loading';
  raceResult!: RunResult;
  raceNumber: number = 1;
  raceList: Race[] = [];
  runResultList: RunResult[] = [];
  faMedal = faMedal;
  fail = faCross;
  clock = faClock;
  private racesService: RacesService = inject(RacesService);
  power!: number;
  acceleration!: number;
  grip!: number;
  maniability!: number;
  weight!: number;
  energy!: number;
  wear!: number;

  constructor() { }

  ngOnInit(): void {
    this.racesService.getAllRaces(11).subscribe(raceList => {
      this.raceList = raceList;
      this.fetchStatus = 'success';
    });
  }

  onStart(): void {
    //Todo: simulate run with selected vehicle
  }

  runAll() {
    for (const race of this.raceList) {
      //Todo: simulate run with selected vehicle
    }
  }
}
