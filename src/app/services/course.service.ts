import { Injectable, signal } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private courseList = signal<Course[]>([]);

  constructor() { }

  get courses() {
    return this.courseList;
  }

  addCourse(course: Course) {
    this.courseList.set([...this.courseList(), course]);
  }

  getCourses(): Course[] {
    return this.courseList();
  }
}