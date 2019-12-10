import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import {CourseModel} from '../../entity';
import {By} from '@angular/platform-browser';

describe('CourseComponent', () => {

  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  const course: CourseModel = {
    id: 1,
    title: 'Video Course 1. Name tag',
    creationDate: '9 Nov, 2018',
    duration: '1h 28 min',
    // tslint:disable-next-line:max-line-length
    description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseComponent]
    })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('raises the onEdit event when clicked', () => {
    const comp = fixture.componentInstance;
    comp.course = course;

    fixture.detectChanges();

    comp.edit.subscribe((selectedCourse: CourseModel) =>
        expect(selectedCourse).toBe(course));
    comp.onEdit();
  });

  it('raises the onDelete event when clicked', () => {
    const comp = fixture.componentInstance;
    comp.course = course;

    comp.delete.subscribe((selectedCourse: CourseModel) =>
        expect(selectedCourse).toBe(course));

    const btn = fixture.debugElement.query(By.css('.delete__button'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
