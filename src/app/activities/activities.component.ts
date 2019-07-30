import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  protected activities: String[] = ['sport', 'culture', 'party']

  @Output() picked = new EventEmitter<String>()

  constructor() { }

  ngOnInit() {
  }

  setLevel(level: String) {
    this.picked.emit(level)
  }

}