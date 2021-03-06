import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CourseModel} from '../../entity';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../services/course.service';
import {tap} from 'rxjs/operators';

export const AUTHORS = [
  {
    id: 1,
    name: 'First Author',
  },
  {
    id: 2,
    name: 'Second Author',
  },
  {
    id: 3,
    name: 'Third Author',
  },
  {
    id: 4,
    name: 'Fourth Author',
  },
];


@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseFormComponent implements OnInit {

  @Input() title = '';
  course: CourseModel;
  @Input() isSeparate: boolean;
  public courseForm: FormGroup;
  public isAutocompleteVisible = false;
  public authors: FormControl = new FormControl();
  public listOfAuthors: {id: number, name: string}[];
  public selectedAuthors: string[] = [];

  constructor(
      private ref: ChangeDetectorRef,
      private router: Router,
      private courseService: CourseService,
      private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.setFormValues();
    this.listOfAuthors  = AUTHORS;
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourseById(Number(id))
        .pipe(tap(data => console.log(data)))
        .subscribe(course => {
          if (course != null) {
            this.course = course;
            this.courseForm.controls.title.setValue(course.title);
            this.courseForm.controls.description.setValue(course.description);
            this.courseForm.controls.duration.setValue(course.duration);
            this.courseForm.controls.date.setValue(course.creationDate);
          }
        });
  }

  public onCourseSubmit(): void {
    const id = this.course == null ? null : this.course.id;
    const title = this.courseForm.value.title;
    const description = this.courseForm.value.description;
    const duration = this.courseForm.value.duration;
    const date = this.courseForm.value.date;

    const courseById = this.courseService.getCourseById(id);
    if (id != null) {
      console.log('Update course');
      const courseModel = new CourseModel(id, title, new Date(date), duration, description);
      this.courseService.updateCourse(courseModel).subscribe();
    } else {
      console.log('Create course');
      const courseModel = new CourseModel(new Date().getMilliseconds(), title, new Date(date), duration, description);
      this.courseService.createCourse(courseModel).subscribe();
    }

    this.router.navigateByUrl('/courses');
  }

  public addAuthor(author: {id: number, name: string}): void {
    this.isAutocompleteVisible = false;
    if (!this.selectedAuthors.find((item) => item === author.name)) {
      this.selectedAuthors.push(author.name);
      this.listOfAuthors = this.listOfAuthors
          .filter(item => this.selectedAuthors.indexOf(item.name) < 0);
    }
    this.authors.patchValue(this.selectedAuthors);
  }

  public onCancelClick(): void {
    console.log('Cancel event initiated');
    this.router.navigateByUrl('/courses');
  }

  public removeAuthor(index: number): void {
    // (this.courseForm.get('authors') as FormArray).removeAt(index);
  }

  public isSelected(author: {id: number, name: string}): boolean {
    return true;
    // return this.selectedAuthors.findIndex((item) => item === author.name) > -1;
  }

  public selectAuthor(): void {
    this.isAutocompleteVisible = true;
  }
  // deleteSelects(s) {
  //     this.userSelects = this.userSelects.filter((item) => item.id !== s.id);
  // }
  //
  public assignToNgModel(): void {
    // this.userSelectsString = '';
    // this.selectedAuthors.map((item) => this.userSelectsString += item.name + ' ');
    // this.ref.detectChanges();
  }

  private setFormValues(): void {
    this.courseForm = new FormGroup({
      title: new FormControl(this.course && this.course.title || ''),
      description: new FormControl(this.course && this.course.description || ''),
      duration: new FormControl(this.course && this.course.duration || ''),
      date: new FormControl(this.course && this.parseDate(this.course.creationDate) || ''),
      authors: new FormControl(this.authors || []),
    });
  }

  private parseDate(date: Date): string {
    if (date == null) {
      return 'N/A';
    }
    return date.toLocaleDateString('en-US').split('/').join('-');
  }

}
