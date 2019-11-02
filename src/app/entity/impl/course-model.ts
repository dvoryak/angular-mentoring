import {ICourseModel} from '../course-model';

export class CourseModel implements ICourseModel {
    creationDate: Date;
    description: string;
    duration: number;
    id: number;
    title: string;
}
