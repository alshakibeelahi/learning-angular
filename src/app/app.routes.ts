import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "course",
  },
  {
    path: "student",
    loadChildren: () =>
      import('./components/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: "course",
    loadChildren: () =>
      import('./components/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: "**",
    redirectTo: "/",
  },
];
