import { Pipe, PipeTransform } from '@angular/core';
import {CourseModel} from '../entity';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courses: CourseModel[]): CourseModel[] {
    return courses.sort((first: CourseModel, second: CourseModel) =>
        second.creationDate.getTime() - first.creationDate.getTime()
    );
  }


}
