import {Pipe, PipeTransform} from '@angular/core';
import {CourseModel} from '../entity';

@Pipe({
    name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

    transform(courses: CourseModel[]): CourseModel[] {
        return courses.sort((first: CourseModel, second: CourseModel) => {
              if (first.creationDate == null || second.creationDate == null) {
                return 0;
              }
              return new Date(second.creationDate).getTime() - new Date(first.creationDate).getTime();
            }
        );
    }


}
