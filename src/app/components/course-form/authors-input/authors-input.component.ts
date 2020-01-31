import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms';
import {AuthorModel} from '../../../entity/author-model';


@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsInputComponent),
      multi: true,
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthorsInputComponent implements ControlValueAccessor, Validator {
  @Input() authors: AuthorModel[] = [];

  search = '';
  isOpen: boolean;
  selected: AuthorModel[] = [];
  control: AbstractControl = new FormControl();

  get availableAuthors(): AuthorModel[] {
    return this.authors
        .filter((author: AuthorModel) => {
          const selectedIds: string[] = this.selected.map((item) => item.id);
          return !selectedIds.includes(author.id);
        })
        .filter((author) => author.name.toLowerCase().indexOf(this.search.toLowerCase()) === 0);
  }

  onSelect(author: AuthorModel): void {
    this.selected = [...this.selected, author];
    this.resetSearch();
    this.toggleDropdown(false);
    this.writeValue(this.selected);
  }

  onDelete(author: AuthorModel): void {
    this.selected = this.filterById(this.selected, author.id);
    this.writeValue(this.selected);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    this.control = control;
    return this.minAuthorLength(1)(this.control);
  }

  private minAuthorLength(min: number): ValidatorFn | any {
    return (control: AbstractControl) => {
      if (!control) {
        return;
      }
      const { value } = control;
      return value && value.length < min ? { minAuthorLength: true } : null;
    };
  }

  writeValue(value: any[]): void {
    if (value !== this.selected) {
      this.selected = [...value];
    }
    this.onChange(value);
  }

  onBlur(): void {
    this.onTouched();
  }

  onChange: any = () => {};

  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggleDropdown(state?: boolean): void {
    this.isOpen = state || !this.isOpen;
  }

  getVerticalPadding(selected: number): string {
    if (!selected) {
      return;
    }
    return Math.round(selected / 2) * 1.5 + 'rem';
  }

  private resetSearch(): void {
    this.search = '';
  }

  private filterById(list: AuthorModel[], authorId: string): AuthorModel[] {
    return list.filter(item => item.id !== authorId);
  }
}
