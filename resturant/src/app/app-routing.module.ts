import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {ListRestoComponent} from './list-resto/list-resto.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent } from './login/login.component';

const routes: Routes = [
  {component:AddRestroComponent,path:'Add'},
  {component:ListRestoComponent,path:'list'},
  {component:UpdateRestroComponent,path:'update'},
  {component:RegisterComponent,path:'register'},
  {component:LoginComponent,path:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
