/* =====================================================================
   FILE: components/student-card/student-card.ts
   WHAT: A single student card in the directory grid.
   FIGMA: Frame "Student card" inside "Class of 2028 · Student directory".
   ===================================================================== */
import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-card',
  imports: [RouterLink],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css',
})
export class StudentCard {
  // The parent (students-page) passes one student object via [student]="s".
  // `input()` makes this a required signal input (Angular 17+).
  public readonly student = input.required<Student>();

  // Did the portrait fail to load?
  private readonly imageFailed = signal(false);

  // The path actually shown: placeholder if the real image failed.
  public readonly photoSrc = computed(() =>
    this.imageFailed() ? 'images/placeholder-portrait.svg' : this.student().photo,
  );

  // Called by the template when the image cannot be loaded.
  public onImageError(): void {
    this.imageFailed.set(true);
  }
}