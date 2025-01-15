import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quiz-categories',
  templateUrl: './quiz-categories.component.html',
  styleUrls: ['./quiz-categories.component.scss']
})
export class QuizCategoriesComponent {
  @Input() categories!: [];
  @Output() setActiveCategory = new EventEmitter();

  trackByCategory(index: number, category: string) {
    return category;
  }

  onCategoryClicked(activeCategory: string) {
    this.setActiveCategory.emit(activeCategory);
  }
}
