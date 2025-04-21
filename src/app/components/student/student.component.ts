import { Component, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StudentService } from '../../services/student.service';
import { CourseService } from '../../services/course.service';  // Add course service
import { Student } from '../../models/student.model';
import { Course } from '../../models/course.model';  // Assuming you have a Course model
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule, RouterModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  studentForm: FormGroup;

  private studentsSignal = signal<Student[]>([]);
  students = computed(() => this.studentsSignal());
  private coursesSignal = signal<Course[]>([]);
  courses = computed(() => this.coursesSignal());

  constructor(
    private fb: FormBuilder,
    private studentService: StudentService,
    private courseService: CourseService // Inject the course service
  ) {
    this.studentForm = this.fb.group({
      id: [0],
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(32)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      course: ['', Validators.required]
    });

    // Load students and courses
    this.loadStudents();
    this.loadCourses();
  }

  loadStudents() {
    this.studentsSignal.set(this.studentService.getStudents());
  }

  loadCourses() {
    this.coursesSignal.set(this.courseService.getCourses());  // Assuming you have a course service
  }

  addStudent() {
    if (this.studentForm.valid) {
      const newStudent = this.studentForm.value as Student;
      console.log(newStudent);  // Log the new student object
      this.studentService.addStudent(newStudent);
      this.studentsSignal.set(this.studentService.getStudents());
      this.studentForm.reset();
    }
  }
}
