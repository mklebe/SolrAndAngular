import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comfort',
  templateUrl: './comfort.component.html',
  styleUrls: ['./comfort.component.css']
})
export class ComfortComponent implements OnInit {

  protected availableComfortLevels: String[] = ['1', '2', '3', '4']

  @Output() picked = new EventEmitter<String>()

  constructor() { }

  ngOnInit() {
  }

  setLevel(level: String) {
    this.picked.emit(level)
  }

}
