import {AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorderChanging]'
})
export class CourseBorderDirective implements OnInit, AfterViewInit {

  constructor(
      private renderer: Renderer2,
      private el: ElementRef) {
  }
  @Input() creationDate: Date;
  private borderColor: string;
  private currentDate = new Date();

  private compareDates(firstDate: Date): number {
    if (this.currentDate == null || firstDate == null) {
      return 0;
    }
    const timeDifference = new Date(this.currentDate).getTime() - new Date(firstDate).getTime();
    return Math.floor(timeDifference / (1000 * 3600 * 24));
  }

  ngOnInit(): void {
    this.courseBorder(this.creationDate);
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'border', `1px solid ${this.borderColor}`);
  }

  private courseBorder(creationDate: Date): void {
    const daysDifference = this.compareDates(creationDate);
    const isGreenBorder = (creationDate < new Date(this.currentDate)) && (daysDifference <= 14);
    const isBlueBorder = (creationDate > new Date(this.currentDate));
    if (isGreenBorder) {
      this.borderColor = '#9bc837';
    } else {
      this.borderColor = isBlueBorder ? '#30b6dd' : 'transparent';
    }
  }
}
