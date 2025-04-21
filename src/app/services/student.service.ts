import { Injectable, signal } from '@angular/core';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsList = signal<Student[]>(this.loadFromLocalStorage());
  private currentId = this.loadCurrentIdFromLocalStorage();

  get students() {
    return this.studentsList;
  }

  addStudent(student: Student) {
    const newStudent = { ...student, id: this.generateId() };
    const updatedList = [...this.studentsList(), newStudent];
    this.studentsList.set(updatedList);
    this.saveToLocalStorage(updatedList);
  }

  getStudents(): Student[] {
    return this.studentsList();
  }

  getStudentDetails(id: number): Student | undefined {
    return this.studentsList().find(student => student.id === id);
  }

  private generateId(): number {
    const newId = this.currentId + 1;
    this.currentId = newId;
    this.saveCurrentIdToLocalStorage(newId);
    return newId;
  }

  private saveToLocalStorage(students: Student[]): void {
    localStorage.setItem('students', JSON.stringify(students));
  }

  private loadFromLocalStorage(): Student[] {
    const data = localStorage.getItem('students');
    return data ? JSON.parse(data) : [];
  }

  private saveCurrentIdToLocalStorage(id: number): void {
    localStorage.setItem('currentId', id.toString());
  }

  private loadCurrentIdFromLocalStorage(): number {
    const data = localStorage.getItem('currentId');
    return data ? parseInt(data, 10) : 0; // Default to 0 if no ID is stored
  }
}
