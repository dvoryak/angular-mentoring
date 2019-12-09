import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../entity';
import {COURSES} from '../../shared/courses.constant';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: CourseModel[];

  constructor() { }

  ngOnInit(): void {
    this.courses = COURSES;
  }

  public onCreateCourse(): void {}

  public onEdit(): void {}

  public onDelete(): void {}

  public onShowMore(): void {}

  onCourseSearch($event: string) {
    console.log('Search');
    this.courses = COURSES.filter(x => x.description.includes($event));
  }
}
