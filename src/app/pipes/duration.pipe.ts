import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: string): string {
    const hours = Math.floor(+value / 60);
    const minutes = Math.floor((+value % 60));
    return hours ? `${hours}h ${minutes}min` : `${minutes}min`;
  }

}

