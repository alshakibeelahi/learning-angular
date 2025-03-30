import { Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { UniversityComponent } from './components/university/university.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "university",
  },
  {
    path: "student",
    component: StudentComponent,
  },
  {
    path: "university",
    component: UniversityComponent,
  },
  {
    path:"**", // Wildcard route for a 404 page
    redirectTo: "/",
  }
];
