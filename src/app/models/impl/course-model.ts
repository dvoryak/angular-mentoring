import {ICourseModel} from '../course-model';

class CourseModel implements ICourseModel {
    creationDate: Date;
    description: string;
    duration: number;
    id: number;
    title: string;
}
