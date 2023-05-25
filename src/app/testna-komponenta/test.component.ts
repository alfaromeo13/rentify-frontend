import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";

@Component({
    selector:'app-test',
    templateUrl:'test.component.html',
    styleUrls:['test.component.css'],
})
export class TestComponent{
    inputValue :string="kkkkkk";   

    constructor(private toastr:ToastrService){}

    printVal() :void{
            this.toastr.success('Successfully logged in!');
    }

}