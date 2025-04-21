import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { StudentService } from '../../../services/student.service';
import { Student } from '../../../models/student.model';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-showstudent-details',
  standalone: true,
  imports: [TranslateModule, CommonModule, RouterModule],
  templateUrl: './showstudent-details.component.html',
  styleUrls: ['./showstudent-details.component.scss']
})
export class ShowstudentDetailsComponent implements OnInit {
  selectedStudent: Student | undefined;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.selectedStudent = this.studentService.getStudentDetails(id);
    }
  }
}
