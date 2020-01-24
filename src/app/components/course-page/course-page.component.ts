import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CourseModel} from '../../entity';
import {FilterPipe} from '../../pipes/filter.pipe';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePageComponent implements OnInit {
  public courses: CourseModel[];
  public course: CourseModel;
  private isWarningVisible = false;
  private isEditModalVisible: boolean;
  private modalTitle: string;
  private modalMessage: string;
  private isPaging = true;
  private event: string;
  private startPaging = 0;
  private pagingSize = 10;

  constructor(private filterPipe: FilterPipe, private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourses();
  }

  public onCreateCourse(): void {}

  public onEdit(): void {}

  public onDelete(course: CourseModel): void {
    this.course = course;
    this.setModalInfo(course, this.event);
    console.log('Delete action');
  }

  public onShowMore(): void {}

  onCourseSearch(filter: string) {
    console.log('Search');
    this.courses = this.filterPipe.transform(this.courses, filter);
  }

  public closeWarning(): void {
    this.isWarningVisible = false;
    this.isEditModalVisible = false;
  }

  public checkModalConfirmation(confirmation: boolean): void {
    this.isWarningVisible = !this.isWarningVisible;
    if (confirmation) {
      this.submitDelete(this.course);
    }
  }

  private setModalInfo(course: CourseModel, event: string): void {
    this.modalTitle = `${event} course`;
    this.modalMessage = `Do you really want to ${event} ${course.title}?`;
    this.isWarningVisible = !this.isWarningVisible;
  }

  private submitDelete(course: CourseModel): void {
    this.courseService.removeCourse(course.id);
    this.courses = this.courseService.getCourses();
  }
}
