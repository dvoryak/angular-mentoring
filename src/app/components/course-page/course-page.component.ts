import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../entity';
import {COURSES} from '../../shared/courses.constant';
import {FilterPipe} from '../../pipes/filter.pipe';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: CourseModel[];

  constructor(private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    this.courses = COURSES;
  }

  public onCreateCourse(): void {}

  public onEdit(): void {}

  public onDelete(): void {}

  public onShowMore(): void {}

  onCourseSearch(filter: string) {
    console.log('Search');
    this.courses = this.filterPipe.transform(COURSES, filter);
  }
}
