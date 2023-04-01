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
  selector: 'races',
  standalone: true,
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    SpinnerComponent,
    FlatButtonComponent,
    FontAwesomeModule
  ]
})
export class RacesComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' | 'fetchResult' = 'loading';
  raceResult!: RunResult;
  raceNumber: number = 1;
  raceList: Race[] = [];
  runResultList: RunResult[] = [];
  faMedal = faMedal;
  fail = faCross;
  clock = faClock;
  private racesService: RacesService = inject(RacesService);

  constructor() { }

  ngOnInit(): void {
    this.racesService.getAllRaces(11).subscribe(raceList => {
      this.raceList = raceList;
      this.fetchStatus = 'success';
    });
  }

  onStart(): void {
    this.fetchStatus = 'fetchResult';
    this.racesService.run(this.raceNumber, 11).subscribe(result => {
      this.fetchStatus = 'success';
      this.runResultList.push(result);
    })
  }

  runAll() {
    this.fetchStatus = 'fetchResult';
    const runList = [];
    for (const race of this.raceList) runList.push(this.racesService.run(race.id,11).pipe(catchError(() => of({
      medal: undefined,
      race: race
    } as RunResult))));
    forkJoin(runList).subscribe(resultList => {
      this.runResultList.push(...resultList);
      this.fetchStatus = 'success';
    })
  }
}
