import {Injectable} from '@angular/core';
import {CourseModel} from '../entity';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';


const COURSES = 'courses';
const SERVER_ENDPOINT = 'http://localhost:3004';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(private http: HttpClient) {
            this.fetchCourses();
    }

    private courses = new BehaviorSubject<CourseModel[]>(null);
    private course = new BehaviorSubject<CourseModel>(null);

    public getCourses(): Observable<CourseModel[]> {
        return this.courses.asObservable();
    }

    public searchCourses(searchText: string): Observable<CourseModel[]> {
        this.http.get<CourseModel[]>(`${SERVER_ENDPOINT}/${COURSES}?textFragment=${searchText}`)
            .pipe(tap(resp => this.courses.next(resp)))
            .subscribe();

        return this.courses.asObservable();
    }

    createCourse(course: CourseModel): Observable<any> {
        return this.http.post<any>(`${SERVER_ENDPOINT}/${COURSES}`, {
            id: course.id,
            title: course.title,
            creationDate: course.creationDate,
            duration: course.duration,
            description: course.description
        }).pipe(tap(resp => this.courses.next(resp)));
    }

    getCourseById(courseId: number): Observable<CourseModel> {
        this.http.get<CourseModel[]>(`${SERVER_ENDPOINT}/${COURSES}?id=${courseId}`)
            .pipe(tap(courses => this.course.next(courses[0])))
            .subscribe();
        return this.course.asObservable();
    }

    updateCourse(course: CourseModel): Observable<CourseModel[]> {
        return this.http.put<CourseModel[]>(`${SERVER_ENDPOINT}/${COURSES}`,
            {
                id: course.id,
                title: course.title,
                creationDate: course.creationDate,
                duration: course.duration,
                description: course.description
            }).pipe(tap(resp => this.courses.next(resp)));
    }

    removeCourse(courseId: number): Observable<CourseModel[]> {
        console.log('Remove course initiated for id=' + courseId);
        const params = new HttpParams();
        params.append('id', String(courseId));
        return this.http.put<CourseModel[]>(`${SERVER_ENDPOINT}/${COURSES}/remove`, {id: courseId})
            .pipe(tap(resp => this.courses.next(resp)));
    }

    private fetchCourses(): void {
        this.http.get<CourseModel[]>(`${SERVER_ENDPOINT}/${COURSES}`)
            .pipe(tap(resp => this.courses.next(resp)))
            .subscribe();
    }

}
