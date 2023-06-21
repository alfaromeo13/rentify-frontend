import { Component, OnInit } from '@angular/core';
import { RoomShowcaseModel } from '../models/roomshowcase';
import { v4 as uuid } from 'uuid';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  isActive : boolean =false;
  pageNo : number = 10;
  PAGE_TOLERANCE : number = 3;
  MAX_PAGE : number = 30;
  apartmani : RoomShowcaseModel[] = [];

  constructor() { }


  set_page_no(newPageNo:number):void{
    if(newPageNo>0 && newPageNo <= this.MAX_PAGE)
      this.pageNo = newPageNo;
  }

  ngOnInit(): void {
  }

  public generateRooms(): RoomShowcaseModel[] {
    var rez = [];
    for (let item of [].constructor(10)) {
       var soba = new RoomShowcaseModel(uuid()+'', "Luxury apartment in downtown New York", "This is a luxurious apartment located in the heart of New York City", [
        "https://images1.apartments.com/i2/H2mjxvrJrDWsM4Jv4OI7Hnak9o1jBEKjp7JDn6QjYVg/116/montrose-at-buffalo-bayou-houston-tx-primary-photo.jpg?p=1",
        "https://images1.apartments.com/i2/6C30ug8dE1ObDYjKTiNzoqniGDOuKnMm0IM-2bIRd8o/116/woods-on-lamonte-houston-tx-primary-photo.jpg?p=1",
        "https://images1.apartments.com/i2/xF1Yyy9oUaJ7SUK3p20WteWidXGM2VkzcLvIpWN9uIs/116/the-cove-houston-tx-primary-photo.jpg?p=1"
      ], "10 murtovine 6, kuca 51", 69.69, 4.3);
      rez.push(soba);
    }
    return rez;
  }
 
  @Output()
  onClose = new EventEmitter();

  click(){ 
    this.isActive=!this.isActive;
  }

  cancel() { this.isActive=false; }

}