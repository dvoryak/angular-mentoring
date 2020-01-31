import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseModel} from '../../entity';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseService} from '../../services/course.service';
import {tap} from 'rxjs/operators';
import {AuthorModel, AuthorModelImpl} from '../../entity/author-model';

export const AUTHORS: AuthorModel[] = [
  {
    id: '1',
    name: 'First Author',
  },
  {
    id: '2',
    name: 'Second Author',
  },
  {
    id: '3',
    name: 'Third Author',
  },
  {
    id: '4',
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
  course: CourseModel;
  @Input() isSeparate: boolean;
  public courseForm: FormGroup;
  public isAutocompleteVisible = false;
  public authorsFormControl: FormControl = new FormControl();
  public listOfAuthors: AuthorModel[] = AUTHORS;
  public selectedAuthors: string[] = [];

  constructor(
      private ref: ChangeDetectorRef,
      private router: Router,
      private courseService: CourseService,
      private route: ActivatedRoute,
      private fb: FormBuilder
  ) {
    this.courseForm = this.fb.group({
      id: null,
      title: [null, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      description: [null, [
        Validators.required,
        Validators.maxLength(500)
      ]],
      creationDate: [null, [
        Validators.required
      ]],
      duration: [null, [
        Validators.required
      ]],
      authors: [[], [
        Validators.required
      ]]
    });
  }

  ngOnInit(): void {
    AUTHORS.forEach(x => this.listOfAuthors.push(new AuthorModelImpl(String(x.id), x.name)));
    const id = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourseById(Number(id))
        .pipe(tap(data => console.log(data)))
        .subscribe(course => {
          if (course != null) {
            this.course = course;
            this.courseForm.controls.title.setValue(course.title);
            this.courseForm.controls.description.setValue(course.description);
            this.courseForm.controls.duration.setValue(course.duration);
            this.courseForm.controls.creationDate.setValue(course.creationDate);
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

  public addAuthor(author: AuthorModel): void {
    this.isAutocompleteVisible = false;
    if (!this.selectedAuthors.find((item) => item === author.name)) {
      this.selectedAuthors.push(author.name);
      this.listOfAuthors = this.listOfAuthors
          .filter(item => this.selectedAuthors.indexOf(item.name) < 0);
    }
    this.authorsFormControl.patchValue(this.selectedAuthors);
  }

  public onCancelClick(): void {
    console.log('Cancel event initiated');
    this.router.navigateByUrl('/courses');
  }

  public isSelected(author: AuthorModel): boolean {
    return true;
  }

  public selectAuthor(): void {
    this.isAutocompleteVisible = true;
  }

  private setFormValues(): void {
    this.courseForm = new FormGroup({
      title: new FormControl(this.course && this.course.title || ''),
      description: new FormControl(this.course && this.course.description || ''),
      duration: new FormControl(this.course && this.course.duration || ''),
      date: new FormControl(this.course && this.parseDate(this.course.creationDate) || ''),
      authors: new FormControl(this.authorsFormControl || []),
    }, );
  }

  private parseDate(date: Date): string {
    if (date == null) {
      return 'N/A';
    }
    return date.toLocaleDateString('en-US').split('/').join('-');
  }

  get title(): AbstractControl {
    return this.courseForm.get('title');
  }

  get description(): AbstractControl {
    return this.courseForm.get('description');
  }

  get creationDate(): AbstractControl {
    return this.courseForm.get('creationDate');
  }

  get duration(): AbstractControl {
    return this.courseForm.get('duration');
  }

  get authors(): AbstractControl {
    return this.courseForm.get('authors');
  }



}
