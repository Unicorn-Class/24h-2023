import {Component, inject, OnInit} from '@angular/core';
import {TeamInventoryService} from "../../api/api/teamInventory.service";
import { faGasPump, faExclamationCircle,
   faWeightHanging, faAngleDoubleRight, faThermometerThreeQuarters,
   faHandPaper,faCarCrash
   } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {CommonModule} from "@angular/common";
@Component({
  selector: 'app-stat-bar',
  templateUrl: './stat-bar.component.html',
  styleUrls: ['./stat-bar.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class StatBarComponent implements OnInit {

  private inventoryService: TeamInventoryService = inject(TeamInventoryService);

  fetchStatus: 'loading' | 'success' = 'loading';

  power = 0;
  acceleration = 0;
  grip = 0;
  maniability = 0;
  weight = 0;
  energy = 0;
  wear = 0;

  faGasPump = faGasPump;
  faExclamationCircle = faExclamationCircle;
  faWeightHanging = faWeightHanging;
  faAngleDoubleRight = faAngleDoubleRight;
  faThermometerThreeQuarters = faThermometerThreeQuarters;
  faHandPaper = faHandPaper;
  faCarCrash = faCarCrash;
  constructor() { }

  ngOnInit(): void {
    this.inventoryService.getTeamInventoryEquipped(11).subscribe(inventory => {
      const invItemList = inventory.items?.filter(item => item.isEquipped).map(invItem => invItem.item);
      const stats = invItemList?.flatMap(item => item?.statistiques);
      this.power = stats?.filter(stat => stat?.type === 'Power').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.acceleration = stats?.filter(stat => stat?.type === 'Acceleration').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.grip = stats?.filter(stat => stat?.type === 'Grip').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.maniability = stats?.filter(stat => stat?.type === 'Handling ability').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.weight = stats?.filter(stat => stat?.type === 'Weight').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.wear = stats?.filter(stat => stat?.type === 'Wear').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.energy = stats?.filter(stat => stat?.type === 'Energy').map(stat => stat.value).reduce((partialSum, a) => partialSum + a, 0);
      this.fetchStatus = 'success';
    })
  }

}
