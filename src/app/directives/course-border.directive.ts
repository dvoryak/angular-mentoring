
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnInit, AfterViewInit {
  @Input() creationDate: Date;
  public borderColor: string;
  public currentDate = new Date();

  constructor(
      private renderer: Renderer2,
      private el: ElementRef) {
  }

  ngOnInit(): void {
    this.courseBorder(this.creationDate);
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${this.borderColor}`);
  }

  public courseBorder(creationDate: Date): void {
    const daysDiff = this.compareDates(creationDate, this.currentDate);
    const isGreenBorder = !!(creationDate < this.currentDate) &&
        (daysDiff <= 14);
    const isBlueBorder = !!(creationDate > this.currentDate);
    this.borderColor = isGreenBorder ? '#9bc837' : isBlueBorder ? '#30b6dd' : 'transparent';
  }

  public compareDates(firstDate: Date, secondDate: Date): number {
    const timeDifference = secondDate.getTime() - firstDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  }
}
