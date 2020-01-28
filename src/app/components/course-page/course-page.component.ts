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
  private _courses: CourseModel[];
  private _course: CourseModel;
  private _isWarningVisible = false;
  private _isEditModalVisible: boolean;
  private _modalTitle: string;
  private _modalMessage: string;
  private isPaging = true;
  private event: string;
  private startPaging = 0;
  private pagingSize = 10;

  constructor(private filterPipe: FilterPipe, private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.getCourses();
  }

  public onCreateCourse(): void {}

  public onEdit(): void {}

  public onDelete(course: CourseModel): void {
    this._course = course;
    this.setModalInfo(course, this.event);
    console.log('Delete action');
  }

  public onShowMore(): void {}

  onCourseSearch(filter: string) {
    console.log('Search');
    this._courses = this.filterPipe.transform(this._courses, filter);
  }

  public closeWarning(): void {
    this._isWarningVisible = false;
    this._isEditModalVisible = false;
  }

  public checkModalConfirmation(confirmation: boolean): void {
    this._isWarningVisible = !this._isWarningVisible;
    if (confirmation) {
      this.submitDelete(this._course);
    }
  }

  private setModalInfo(course: CourseModel, event: string): void {
    this._modalTitle = `${event} course`;
    this._modalMessage = `Do you really want to ${event} ${course.title}?`;
    this._isWarningVisible = !this._isWarningVisible;
  }

  private submitDelete(course: CourseModel): void {
    this.courseService.removeCourse(course.id);
    this._courses = this.courseService.getCourses();
  }

  get modalMessage(): string {
    return this._modalMessage;
  }

  get modalTitle(): string {
    return this._modalTitle;
  }
  get isEditModalVisible(): boolean {
    return this._isEditModalVisible;
  }
  get isWarningVisible(): boolean {
    return this._isWarningVisible;
  }
  get course(): CourseModel {
    return this._course;
  }
  get courses(): CourseModel[] {
    return this._courses;
  }
}
