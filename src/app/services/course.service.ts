import {Injectable} from '@angular/core';
import {CourseModel} from '../entity';


@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor() {
    }

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

    public getCourses(): CourseModel[] {
        return CourseService.COURSES;
    }

    createCourse(course: CourseModel): void {
        CourseService.COURSES.push(course);
    }

    getCourseById(id: number): CourseModel {
        return CourseService.COURSES.find(item => item.id === id);
    }

    updateCourse(course: CourseModel): void {
        const currentValue = CourseService.COURSES;
        const foundItem = currentValue.findIndex(item => item.id === course.id);
        currentValue.map(item => item[foundItem] = course);
    }

    removeCourse(id: number): void {
        console.log('Remove course initiated for id=' + id);
        CourseService.COURSES = CourseService.COURSES.filter(currentCourse => currentCourse.id !== id);
    }

}
