import { Injectable } from '@angular/core';
import {CourseModel} from '../entity';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }
  private static COURSES: CourseModel[] = [
    {
      id: 1,
      title: 'Video Course 1. Name tag',
      creationDate: new Date('2019-10-07'),
      duration: '87',
      // tslint:disable-next-line:max-line-length
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 2,
      title: 'Video Course 2. Name tag',
      creationDate: new Date('2019-12-7'),
      duration: '93',
      // tslint:disable-next-line:max-line-length
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 3,
      title: 'Video Course 3. Name tag',
      creationDate: new Date('2020-12-07'),
      duration: '123',
      // tslint:disable-next-line:max-line-length
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
  ];

  private courseSource: BehaviorSubject<CourseModel[]> = new BehaviorSubject([]);
  private courseData = this.courseSource.asObservable();

  public getCourses(): Observable<CourseModel[]> {
    this.courseSource.next(CourseService.COURSES);
    return this.courseData;
  }

  createCourse(course: CourseModel): void {
    const currentValue = this.courseSource.value;
    const updatedValue = [...currentValue, course];
    this.courseSource.next(updatedValue);

  }

  getCourseById(id: number): CourseModel {
    const currentValue = this.courseSource.value;
    return currentValue.find(item => item.id === id);
  }

  updateCourse(course: CourseModel): void {
    const currentValue = this.courseSource.value;
    const foundItem = currentValue.findIndex(item => item.id === course.id);
    currentValue.map(item => item[foundItem] = course);
    this.courseSource.next(currentValue);
  }

  removeCourse(id: number): void {
    const currentValue = this.courseSource.value.filter(currentCourse => currentCourse.id !== id);
    this.courseSource.next(currentValue);
  }

}
