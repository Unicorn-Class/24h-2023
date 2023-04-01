import {CommonModule, NgIf} from '@angular/common';
import {Component, inject, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RacesService } from 'src/app/api/api/races.service';
import { RunResult } from 'src/app/api/model/runResult';
import {Race} from "../../api/model/race";
import {catchError, forkJoin, of} from "rxjs";
import {SpinnerComponent} from "../../components/spinner/spinner.component";

@Component({
  selector: 'races',
  standalone: true,
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    SpinnerComponent
  ]
})
export class RacesComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  raceResult!: RunResult;
  raceNumber: number = 1;
  raceList: Race[] = [];
  runResultList: RunResult[] = [];
  private racesService: RacesService = inject(RacesService);

  constructor() { }

  ngOnInit(): void {
    this.racesService.getAllRaces(11).subscribe(raceList => {
      this.raceList = raceList;
      this.fetchStatus = 'success';
    });
  }

  onStart(): void {
    this.fetchStatus = 'loading';
    this.runResultList = [];
    this.racesService.run(this.raceNumber, 11).subscribe(result => {
      this.fetchStatus = 'success';
      this.runResultList.push(result);
    })
  }

  runAll() {
    this.fetchStatus = 'loading';
    this.runResultList = [];
    const runList = [];
    for (const race of this.raceList) runList.push(this.racesService.run(race.id,11).pipe(catchError(() => of({
      medal: undefined,
      race: race
    } as RunResult))));
    forkJoin(runList).subscribe(resultList => {
      this.runResultList = resultList;
      this.fetchStatus = 'success';
    })
  }
}
