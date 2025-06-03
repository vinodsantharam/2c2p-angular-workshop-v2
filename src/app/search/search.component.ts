import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="my-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
      <form [formGroup]="searchForm" (ngSubmit)="onSubmit()" class="flex flex-col sm:flex-row gap-3 items-center">
        <div class="flex-grow w-full sm:w-auto">
          <label for="searchInput" class="sr-only">Search</label>
          <input 
            type="text" 
            id="searchInput"
            formControlName="searchTerm"
            placeholder="Search for videos (min 3 chars)..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
        </div>
        <button 
          type="submit" 
          [disabled]="!searchForm.valid"
          class="w-full sm:w-auto px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
      <div *ngIf="showSearchTermMinLengthError" class="mt-2 text-sm text-red-600 dark:text-red-400">
        Search term must be at least 3 characters long.
      </div>
      <div *ngIf="showSearchTermRequiredError" class="mt-2 text-sm text-red-600 dark:text-red-400">
        Search term is required.
      </div>
    </div>
  `,
  styles: []
})
export class SearchComponent implements OnInit {
  @Output() searchSubmitted = new EventEmitter<string>();
  
  searchForm!: FormGroup;

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchTerm: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
  }

  get searchTerm(): FormControl {
    return this.searchForm.get('searchTerm') as FormControl;
  }

  get showSearchTermMinLengthError(): boolean {
    return this.searchTerm.hasError('minlength') && (this.searchTerm.dirty || this.searchTerm.touched);
  }
  
  get showSearchTermRequiredError(): boolean {
    return this.searchTerm.hasError('required') && !this.searchTerm.hasError('minlength') && (this.searchTerm.dirty || this.searchTerm.touched);
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      const searchTermValue = this.searchTerm.value;
      if (searchTermValue) {
        this.searchSubmitted.emit(searchTermValue);
        console.log('Search submitted:', searchTermValue);
      }
    }
  }
}
