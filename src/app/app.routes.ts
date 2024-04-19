import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title:"Home"
    }, {
        path: "cart",
        component: CartComponent,
        title: "cart",
        // canActivate:[authGuard]
    }, {
        path: "login",
        component: LoginComponent,
        title:"login"
        
    }, {
        path: "register",
        component: RegisterComponent,
        title:"register"
    }, {
        path: "details/:id",
        component: ProdDetailsComponent,
        title:"product details"
    }, {
        path: "**",
        component: NotfoundComponent,
        title: "avhkn"
}

];
