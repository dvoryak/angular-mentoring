import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CourseModel} from '../../entity';
import {FilterPipe} from '../../pipes/filter.pipe';
import {CourseService} from '../../services/course.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePageComponent implements OnInit {
  private _courses: Observable<CourseModel[]>;
  private _course: CourseModel;
  private _isWarningVisible = false;
  private _isEditModalVisible: boolean;
  private _modalTitle: string;
  private _modalMessage: string;
  private event: string;

  constructor(private filterPipe: FilterPipe, private courseService: CourseService, private router: Router) { }

  ngOnInit(): void {
    this._courses = this.courseService.getCourses()
       .pipe(tap(data => console.log(data)));
  }

  public onCreateCourse(): void {
    console.log('Create course event initiated');
    this.router.navigateByUrl('/create-course');
  }

  public onCourseEdit(course: CourseModel): void {
    this.router.navigateByUrl(`/edit-course/${course.id}`);
  }

  public onCourseDelete(course: CourseModel): void {
    this._course = course;
    this.event = 'delete';
    this.setModalInfo(course, this.event);
  }

  public onShowMore(): void {
  }

  onCourseSearch(filter: string) {
    console.log('Search');
    this._courses = this.courseService.searchCourses(filter);
  }

  public closeWarning(): void {
    this._isWarningVisible = false;
    this._isEditModalVisible = false;
  }

  public checkModalConfirmation(confirmation: boolean): void {
    this._isWarningVisible = !this.isWarningVisible;
    if (confirmation) {
      this.submitDelete(this.course);
    }
  }

  private setModalInfo(course: CourseModel, event: string): void {
    this._modalTitle = `${event} course`;
    this._modalMessage = `Do you really want to ${event} ${course.title}?`;
    this._isWarningVisible = !this._isWarningVisible;
  }

  private submitDelete(course: CourseModel): void {
    this.courseService.removeCourse(course.id).subscribe();
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
  get courses(): Observable<CourseModel[]> {
    return this._courses;
  }
}
