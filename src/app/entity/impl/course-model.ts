import {ICourseModel} from '../course-model';

export class CourseModel implements ICourseModel {
    id: number;
    title: string;
    creationDate: Date;
    duration: string;
    description: string;

    constructor(id: number, title: string, creationDate: Date, duration: string, description: string) {
        this.id = id;
        this.title = title;
        this.creationDate = creationDate;
        this.duration = duration;
        this.description = description;
    }
}
