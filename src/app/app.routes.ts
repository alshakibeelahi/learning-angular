import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "course",
  },
  {
    path: "student",
    component: StudentComponent,
  },
  {
    path: "course",
    component: CoursesComponent,
  },
  {
    path:"**", // Wildcard route for a 404 page
    redirectTo: "/",
  }
];
