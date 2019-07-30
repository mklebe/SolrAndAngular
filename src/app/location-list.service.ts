import { Injectable } from '@angular/core';

@Injectable()
export class LocationListService {

  private locationList: String[]
  constructor() {
    this.locationList = []
  }

  addLocation( location: String ) {
    this.locationList.push( location )
  }

  getAllLocations() {
    return this.locationList
  }
}
