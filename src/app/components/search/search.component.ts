import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;
  public isSubmitted = false;
  // TODO placeholder text
  public placeholder = 'Text to search';
  public value = '';
  @Output() courseSearch = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const searchText = this.value;
    console.log(searchText);
    if (searchText && searchText.length) {
      this.isSubmitted = true;
    }
  }

  public onInputChange(value: string): void {
    this.courseSearch.emit(value);
  }
}
