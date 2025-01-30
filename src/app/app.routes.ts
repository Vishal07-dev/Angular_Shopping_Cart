import { Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { TempratureConverterComponent } from './Components/temprature-converter/temprature-converter.component';
import { FormComponent } from './Components/form/form.component';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'cart',
        pathMatch:'full'
    },
    {
        path: 'cart',
        component:CartComponent
    },
    {
        path:'Temp',
        component:TempratureConverterComponent
    },
   {
    path:"form",
    component:FormComponent
   }
];
