import {Component, Input, OnInit} from '@angular/core';
import {CourseModel} from '../../entity';
import {CourseService} from '../../services/course.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  private _course: CourseModel;
  private id: string;
  constructor(private courseService: CourseService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._course = this.courseService.getCourseById(Number(this.id));
    console.log('init edit');
  }

  get course(): CourseModel {
    return this._course;
  }
}
