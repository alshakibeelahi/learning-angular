import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsList = signal<Student[]>([]);

  get students() {
    return this.studentsList;
  }

  addStudent(student: Student) {
    this.studentsList.set([...this.studentsList(), student]);
  }

  getStudents(): Student[] {
    return this.studentsList();
  }
}
