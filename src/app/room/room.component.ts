import { Component, Input, OnInit } from '@angular/core';
import { RoomShowcaseModel } from '../models/roomshowcase';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  constructor() { }

  @Input()
  public soba : RoomShowcaseModel = new RoomShowcaseModel("","",[],"",.2,.1);

  ngOnInit(): void {
  }

}
