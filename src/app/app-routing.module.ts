import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateComponent } from './date/date.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {path:'',redirectTo:'date',pathMatch:'full'},


  {path:'date',component:DateComponent},
  {path:'table',component:TableComponent},
  {path:'keyboard',component:KeyboardComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
