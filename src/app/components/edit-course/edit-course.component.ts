import {Component, Input, OnInit} from '@angular/core';
import {CourseModel} from '../../entity';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  private id: string;
  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    console.log('init edit');
  }

}
