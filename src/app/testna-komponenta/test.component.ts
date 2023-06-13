import { AfterViewInit } from "@angular/core";
import { Component } from "@angular/core";

@Component({
    selector:'app-test',
    templateUrl:'test.component.html',
    styleUrls:['test.component.css'],
})
export class TestComponent implements AfterViewInit{
    bulmaCarousel = require('bulma-carousel/dist/js/bulma-carousel.min.js');
    recived = false;
    images = [""];
    data = [
      "https://img.freepik.com/free-vector/flame-abstract-logo_95982-235.jpg?size=626&ext=jpg",
      "https://img.freepik.com/free-vector/mic-leaf-logo_83874-139.jpg?size=338&ext=jpg",
      "https://img.freepik.com/free-vector/latter-e-fire-color_116762-8.jpg?size=338&ext=jpg",
      "https://img.freepik.com/free-vector/fire-shield-logo_23758-270.jpg?size=338&ext=jpg",
      "https://img.freepik.com/free-vector/fire-water-logo-design_149374-138.jpg?size=338&ext=jpg",
      "https://img.freepik.com/free-vector/flame-abstract-logo_95982-235.jpg?size=626&ext=jpg"
    ]
   
    constructor() {}
  
    ngAfterViewInit() {
      setTimeout(()=>{
        this.images = this.data;
      }, 100);
      setTimeout(()=>{
        this.bulmaCarousel.attach('#carousel', {
          slidesToScroll: 1,
          slidesToShow: 4,
          autoplay: true,
          loop: true
        });
      }, 1000);
    }
}