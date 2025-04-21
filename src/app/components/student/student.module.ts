import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutes } from './student.routes';


@NgModule({
  imports: [
    CommonModule,
    StudentRoutes,
  ]
})
export class StudentModule { }