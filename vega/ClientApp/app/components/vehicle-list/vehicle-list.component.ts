import { Component, OnInit } from '@angular/core';
import { Vehicle, KeyValuePair } from "../../models/i_vehicle";
import { VehicleService } from "../../services/vehicle.service";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
    vehicles: Vehicle[];
    makes: KeyValuePair[];
    //allVehicles: Vehicle[];
    query: any = {};

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
      this.vehicleService.getMakes()
          .subscribe(makes => this.makes = makes);

      this.populateVehicles();
  }

  private populateVehicles() {
      this.vehicleService.getVehicles(this.query)
          .subscribe(vehicles => this.vehicles = vehicles);
  }

  onFilterChange() {

      //this is if your going to filter on the client
      //var vehicles = this.allVehicles;

      //if (this.filter.makeId) 
      //    vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);

      //if (this.filter.modelId)
      //    vehicles = vehicles.filter(v => v.model.id == this.filter.modelId);

      //this.vehicles = vehicles;

      this.populateVehicles();
  }

  resetFilter() {
      this.query = {};
      this.onFilterChange();
  }

  sortBy(columnName: any) {
      if (this.query.sortBy === columnName) {
          this.query.isSortAscending = false;
      } else {
          this.query.sortBy = columnName;
          this.query.isSortAscending = true;
      }

      this.populateVehicles();
  }


}
