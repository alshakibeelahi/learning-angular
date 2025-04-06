import { Component, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courseForm: FormGroup;
  private courseListSignal = signal<Course[]>([]);
  courses = computed(() => this.courseListSignal());

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.courseForm = this.fb.group({
      name: ['', Validators.required],
      duration: [0, [Validators.required, Validators.min(1)]],
    });

    this.loadCourses();
  }

  loadCourses() {
    this.courseListSignal.set(this.courseService.getCourses());
  }

  addCourse() {
    if (this.courseForm.valid) {
      const course: Course = this.courseForm.value;
      this.courseService.addCourse(course);
      this.courseListSignal.set([...this.courseListSignal(), course]);
      this.courseForm.reset({ duration: 0 });
    }
  }
}
