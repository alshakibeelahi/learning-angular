import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutes } from './courses.route';


@NgModule({
  imports: [
    CommonModule,
    CoursesRoutes,
  ]
})
export class CoursesModule { }