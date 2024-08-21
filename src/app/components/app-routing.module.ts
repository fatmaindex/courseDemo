import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './order/product-list/product-list.component';
import { OrderMasterComponent } from './order/order-master/order-master.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ProductDetailsComponent } from './order/product-details/product-details.component';

const routes: Routes = [
  {path:"",component:MainLayoutComponent,children:[
    {path:"", redirectTo:'/Home' ,pathMatch:"full"},
    {path:"Home", component:HomeComponent},
    {path:"Products" ,component:ProductListComponent},
    {path:"Products/:pid" ,component:ProductDetailsComponent},
    {path:"Order" ,component:OrderMasterComponent}, 
  ] },
 
  {path:'Login' ,component:LoginComponent},
  {path:'**', component:NotFoundComponent}//wild card path should be last one
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
