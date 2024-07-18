import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  {path:"",redirectTo:"table",pathMatch:"full"},

  {path:"table",component:TableComponent,title:"table"},
{path:"**",component:NotfoundComponent,title:"NotFounded"}];



@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
