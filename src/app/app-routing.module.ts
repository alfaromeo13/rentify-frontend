import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ApartmentComponent } from "./apartment/apartment.component";
import { IsAlreadyAuthenticatedGuard } from "./auth/guards/is-already-authenticated.guard";
import { isAuthenticated } from "./auth/guards/is-authenticated.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ResetPassword } from "./password-reset/reset-password.component";
import { RegisterComponent } from "./register/register.component";
import { TestComponent } from "./testna-komponenta/test.component";
import { UserComponent } from "./user/user.component";
import { UserGuard } from "./user/user.guard";

const routes :Routes = [
    {
        path:'users', //http://localhost:4200/users
        component: UserComponent,
        canActivate:[UserGuard],
    },
    // {
    //     path:'admin', //http://localhost:4200/admin
    //     component: AdminComponent,
    //     children:[
    //         {  //http://localhost:4200/admin/users
    //             path:'users',
    //             component: UserPreviewComponent
    //         }
    //     ]
    // },
    {
        path:'login',
        component:LoginComponent,
        //canActivate:[IsAlreadyAuthenticatedGuard],
    },
    {
        path:'apartment',
        component: ApartmentComponent,
    },
    {
        path:'test', //http://localhost:4200/test
        component: TestComponent,
        canActivate:[isAuthenticated],
    },
    {
        path:'reset', //http://localhost:4200/reset
        component: ResetPassword,
    },
    {
        path:'register', //http://localhost:4200/register
        component: RegisterComponent,
    },
    {
        path:'home',
        component:HomeComponent,
    },
    {   //http://localhost:4200/something...
        path:'**', //anything else is entered
        redirectTo:'home'
    }]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule{ } 