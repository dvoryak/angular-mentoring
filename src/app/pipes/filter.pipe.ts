import { Pipe, PipeTransform } from '@angular/core';
import {CourseModel} from '../entity';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courses: CourseModel[], filter: string): CourseModel[] {
    return courses.filter(x => x.description.includes(filter));
  }

}
