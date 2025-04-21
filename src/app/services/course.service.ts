import { Injectable, signal } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courseList = signal<Course[]>(this.loadCoursesFromLocalStorage());

  constructor() { }

  get courses() {
    return this.courseList;
  }

  addCourse(course: Course) {
    const updatedCourses = [...this.courseList(), course];
    this.courseList.set(updatedCourses);
    this.saveCoursesToLocalStorage(updatedCourses);
  }

  getCourses(): Course[] {
    return this.courseList();
  }

  private saveCoursesToLocalStorage(courses: Course[]): void {
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  private loadCoursesFromLocalStorage(): Course[] {
    const courses = localStorage.getItem('courses');
    return courses ? JSON.parse(courses) : [];
  }
}