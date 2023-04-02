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
  raceResult!: number;
  minimalMedal!: number | undefined;
  middleMedal!: number | undefined;
  highMedal!: number | undefined;
  raceNumber: number = 1;
  raceList: Race[] = [];
  runResultList: RunResult[] = [];
  faMedal = faMedal;
  fail = faCross;
  clock = faClock;
  private racesService: RacesService = inject(RacesService);
  power: number = 45;
  acceleration: number = 50;
  grip: number = 50;
  maniability: number = 50;
  weight: number = 50;
  energy: number = 10;
  wear: number = 10;
  power_ponderation!: number;
  acceleration_ponderation!: number;
  grip_ponderation!: number;
  maniability_ponderation!: number;
  weight_ponderation!: number;
  energy_ponderation!: number;
  wear_ponderation!: number;
  selectedRace !: Race;

  constructor() { }

  ngOnInit(): void {
    this.racesService.getAllRaces(11).subscribe(raceList => {
      this.raceList = raceList;
      this.fetchStatus = 'success';
    });
  }



  onStart(): void {

    interface S {
      "acceleration": number,
      "energyConsumption": number,
      "grip": number,
      "handlingAbility": number,
      "power": number,
      "wear": number,
      "weight": number,
      [key: string]: number

    }

    //const thisRace = this.raceList.find(r => r.id === this.raceNumber);
    this.selectedRace = this.raceList[this.raceNumber - 1];

    if(this.selectedRace === undefined){
      return;
    }

    const sections = this.selectedRace.sections;
    const nbTours = this.selectedRace.laps;

    if(sections === undefined || nbTours === undefined){
      return;
    }

    const stats: S = {
      "acceleration": this.acceleration,
      "energyConsumption": this.energy,
      "grip": this.grip,
      "handlingAbility": this.maniability,
      "power": this.power,
      "wear": this.wear,
      "weight": this.weight
    };

    // constant : impacted stats, depending on road topology
    const impacts: { [key: string]: any } = {
      "Straight": ["handlingAbility", "power"],
      "Turn": ["handlingAbility", "grip"],
      "Sharp turn": ["handlingAbility", "grip", "acceleration"],
      "Uphill": ["power", "grip"],
      "Downhill": ["acceleration", "power"]
    }

    // constant : base times by road topology
    const globalCoefs: { [key: string]: any } = {
      "Straight": 15,
      "Turn": 30,
      "Sharp turn": 50,
      "Uphill": 35,
      "Downhill": 10
    }

    // constant : weight coefficients depending on terrains
    const terrainCoefs: { [key: string]: any } = {
      "Concrete": 1,
      "Dirt": 1.2,
      "Ice": 0,
    }

    let totalTimeBeforeStops = 0;

    // Parse each section
    for(const section of sections){

      // The product of coefficients we'll use to multiply a section
      let totalCoef = 1;

      // We create each coefficient by using the custom stat level of some selected impacted characteristics
      for(const impact of impacts[section.type]){
        const stat = stats[impact];
        const coef = 1 - (stat / 60);
        totalCoef *= coef;
      }

      // Multiply coefficient with custom stats
      const time = totalCoef * globalCoefs[section.type];

      // Add the weight coefficient, depending on the terrain
      const terrainCoef = (stats.weight/100) * terrainCoefs[section.terrain] + 1;

      totalTimeBeforeStops += time*terrainCoef;
    }

    // We remove the time of stops, due to energy and wear
    const energyStopTime = stats.energyConsumption/4 * nbTours;
    const wearStopTime = stats.wear/2 * nbTours;
    this.raceResult = Math.round((totalTimeBeforeStops * 1000) - energyStopTime - wearStopTime);
    this.minimalMedal = this.selectedRace?.medals?.[0].timeToObtain;
    this.middleMedal = this.selectedRace?.medals?.[1].timeToObtain;
    this.highMedal = this.selectedRace?.medals?.[2].timeToObtain;
  }

  runAll() {
    for (const race of this.raceList) {
      //Todo: simulate run with selected vehicle
    }
  }
}
