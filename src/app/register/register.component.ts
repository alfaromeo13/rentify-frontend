import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { Register } from "../auth/models/register.model";
import { AuthService } from "../auth/services/auth.service";

@Component({
    selector:'app-register',
    templateUrl:'./register.component.html'})
export class RegisterComponent{

    constructor(
        private router : Router,
        private toastr: ToastrService,
        private authService :AuthService){}

    resetPassword(registerForm: any) : void {
        const registerData: Register = registerForm.value;
        // this.authService.resetPassword(resetForm.value.email);
        this.router.navigate(['login']);
    }
}