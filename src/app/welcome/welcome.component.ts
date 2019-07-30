import { LocationListService } from './../location-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [LocationListService],
})
export class WelcomeComponent implements OnInit {

  protected location: String = ''

  constructor(private locationList: LocationListService) { }

  ngOnInit() {
  }

  addLocation( ) {
    this.locationList.addLocation( this.location )
    this.location = ''
  }

  get allLocations() {
    return this.locationList.getAllLocations()
  }
}
