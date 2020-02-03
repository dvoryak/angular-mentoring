import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, tap} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, AfterViewInit  {
  @ViewChild('search', {static: false}) search: ElementRef;
  public isSubmitted = false;
  public placeholder = 'Text to search';
  public value = '';
  @Output() courseSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): any {
    fromEvent(this.search.nativeElement, 'input')
        .pipe(
            map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
            filter(searchValue => searchValue.length > 2),
            debounceTime(500),
            distinctUntilChanged()).subscribe(value => this.courseSearch.emit(value));

    fromEvent(this.search.nativeElement, 'input')
        .pipe(
            map((e: KeyboardEvent) => (e.target as HTMLInputElement).value),
            filter(searchValue => searchValue.length === 0))
        .subscribe(value => this.courseSearch.emit(''));

  }
}
