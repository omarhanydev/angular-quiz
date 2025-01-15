import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionStrategyInterface } from '../question-strategy.interface';

@Component({
  selector: 'app-freetext',
  templateUrl: './freetext.component.html',
  styleUrls: ['./freetext.component.scss']
})
export class FreetextComponent implements QuestionStrategyInterface {
  @Input() possibleAnswers!: string[];
  @Output() onAnswerUpdated: EventEmitter<string> = new EventEmitter();

  setActiveAnswer(answer: string) {
    this.onAnswerUpdated.emit(answer);
  }
}
