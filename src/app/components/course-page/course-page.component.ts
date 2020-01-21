import { Component, OnInit } from '@angular/core';
import {CourseModel} from '../../entity';
import {FilterPipe} from '../../pipes/filter.pipe';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss']
})
export class CoursePageComponent implements OnInit {
  public courses: CourseModel[];

  constructor(private filterPipe: FilterPipe, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(courses => this.courses = courses);
  }

  public onCreateCourse(): void {}

  public onEdit(): void {}

  public onDelete(): void {}

  public onShowMore(): void {}

  onCourseSearch(filter: string) {
    console.log('Search');
    this.courses = this.filterPipe.transform(this.courses, filter);
  }
}
