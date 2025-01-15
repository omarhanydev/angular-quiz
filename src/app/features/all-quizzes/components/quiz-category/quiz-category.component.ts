import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-category',
  templateUrl: './quiz-category.component.html',
  styleUrls: ['./quiz-category.component.scss']
})
export class QuizCategoryComponent {
  @Input() category!: string;
  @Output() categoryClicked = new EventEmitter();
}
