import { Component, OnInit } from '@angular/core';
import { RoomShowcaseModel } from '../models/roomshowcase';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public generateRooms():RoomShowcaseModel[]{
    return [new RoomShowcaseModel("Jotaseva kuca", "iahdyuahfuawjnfowaio ohwuhdawii dwai 29",["https://m.media-amazon.com/images/M/MV5BZmU5ZDE5NTItN2I1YS00ZmFmLTk3YTgtNzQwOGNkYzFjOWRkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"],"iahdyuahfuawjnfowaio ohwuhdawii dwai 29",69.69,4.3)];
  }

}
