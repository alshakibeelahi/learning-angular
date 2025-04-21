import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import { ShowstudentDetailsComponent } from './showstudent-details/showstudent-details.component';
const routes: Routes = [
  {path:'', component:StudentComponent},
  { path: ':id', component: ShowstudentDetailsComponent } // Add route with id

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutes { }