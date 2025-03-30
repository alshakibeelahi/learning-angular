import { Component, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
  studentForm: FormGroup;

  // Use Signal for Students Data (Optimized)
  private studentsSignal = signal<Student[]>([]);

  // Extract the array directly for *ngFor
  students = computed(() => this.studentsSignal());

  constructor(private fb: FormBuilder, private studentService: StudentService) {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
    });

    // Load students initially
    this.loadStudents();
  }

  // Load Students from Service and Update Signal
  loadStudents() {
    this.studentsSignal.set(this.studentService.getStudents());
  }

  // Add Student and Update Signal
  addStudent() {
    if (this.studentForm.valid) {
      const newStudent = this.studentForm.value as Student;
      this.studentService.addStudent(newStudent);

      // Update Signal with new list
      this.studentsSignal.set([...this.studentsSignal(), newStudent]);

      this.studentForm.reset();
    }
  }
}
