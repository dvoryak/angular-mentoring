import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;
  public isSubmitted = false;
  // TODO placeholder text
  public placeholder = 'Text to search';
  public value = '';

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

  public clearSearch(): void {
    this.isSubmitted = false;
    this.searchForm.controls.searchText.setValue('');
  }

  public onInputChange(queryLength: number): void {}
}
