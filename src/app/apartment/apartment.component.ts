import { Component, OnInit } from '@angular/core';
import { RoomShowcaseModel } from '../models/roomshowcase';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public generateRooms(): RoomShowcaseModel[] {
    var rez = [];
    for (let item of [].constructor(10)) {
      rez.push(new RoomShowcaseModel(uuid()+'', "Jotaseva kuca", "Tamo mu ga zabijaju među guzove", [
        "https://i.imgur.com/Rt5ZUtT.jpg",
        "https://i.imgur.com/Vo2wi4c.jpg"], "Doljani BB, Doljani", 69.69, 4.3));
    }
    return rez;
  }

}
