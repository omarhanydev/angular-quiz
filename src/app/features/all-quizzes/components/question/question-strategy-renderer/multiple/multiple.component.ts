import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionStrategyInterface } from '../question-strategy.interface';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements QuestionStrategyInterface {
  @Input() possibleAnswers!: string[];
  @Output() onAnswerUpdated: EventEmitter<string> = new EventEmitter();

  trackByPossibleAnswer(index: number, answer: string) {
    return answer;
  }

  setActiveAnswer(answer: string) {
    this.onAnswerUpdated.emit(answer);
  }
}
