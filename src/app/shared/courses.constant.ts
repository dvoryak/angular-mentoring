import {CourseModel} from '../entity';

export const COURSES: CourseModel[] = [
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
        title: 'Video Course 1. Name tag',
        creationDate: new Date('2019-12-7'),
        duration: '93',
        // tslint:disable-next-line:max-line-length
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
        id: 3,
        title: 'Video Course 1. Name tag',
        creationDate: new Date('2020-12-07'),
        duration: '123',
        // tslint:disable-next-line:max-line-length
        description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
];
