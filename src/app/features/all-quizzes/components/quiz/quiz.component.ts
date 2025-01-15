import { Component, Input } from '@angular/core';
import { Quiz } from '../../types/quiz.type';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  activeQuestionIndex: number = 0;

  @Input() questions!: Quiz[];

  ngOnChanges(changes: any) {
    this.activeQuestionIndex = 0;
  }

  navigateToPreviousQuestion() {
    if (this.activeQuestionIndex !== 0) {
      this.activeQuestionIndex--;
    }
  }

  navigateToNextQuestion() {
    if (this.activeQuestionIndex !== this.questions.length - 1) {
      this.activeQuestionIndex++;
    }
  }

}
