
import { Component, OnInit } from '@angular/core';
import { RacesService } from 'src/app/api/api/races.service';
import { RunResult } from 'src/app/api/model/runResult';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  fetchStatus: 'loading' | 'success' | 'error' = 'loading';
  allRun !: Array<RunResult>
  constructor(public racesService : RacesService) { }

  ngOnInit(): void {
    this.racesService.getAllTeamRaceByRaceId(2,11).subscribe(result  => {
      this.fetchStatus = 'success';
      this.allRun = result;
    })
  }

}
