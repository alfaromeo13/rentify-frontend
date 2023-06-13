import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/services/auth.service";
import { NavbarLink } from "./navbar.model";


@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit{
    
    picture : number = 0;
    isMobileNavActive :boolean = false;
    isUserAuthenticated :boolean = false;
    bulmaCarousel = require('bulma-carousel/dist/js/bulma-carousel.min.js');
    recived = false;
    images = [""];
    data = [
        "https://images.unsplash.com/photo-1550921082-c282cdc432d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1550945771-515f118cef86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1550971264-3f7e4a7bb349?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1550931937-2dfd45a40da0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1550930516-af8b8cc4f871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1550921082-c282cdc432d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=8",
    ]

    //we load navbar elements dynamicaly with ngFor
    links :NavbarLink[]=[
        {
            name: "Home",
            path: "/home"
        },
        {
            name: "Test",
            path: "/test"
        },
        {
            name: "Messages",
            path: "/messages"
        },
        {
            name: "Users",
            path: "/users"
        },
    ];

    constructor(
        private router :Router,
        private authService :AuthService
    ){}

    //prilikom inicijalizacije navbar komponente 
    //subscribujemo se na behavioursubject
    ngOnInit(): void {
        this.authService.isAuthenticated.subscribe(data => {
            this.isUserAuthenticated = data;
        });
        setTimeout(()=>{
            this.images = this.data;
          }, 100);
        setTimeout(()=>{
            this.bulmaCarousel.attach('#carousel', {
              slidesToScroll: 3,
              slidesToShow: 3,
              autoplay: true,
              loop: true
            });
          }, 1000);
    }

    toggleMobileView(): void {
        this.isMobileNavActive=!this.isMobileNavActive;
    }

    logout(): void{
        this.authService.logout();
        this.router.navigate(['login'])
    }
}