import { Component, Input } from '@angular/core';
import { Quiz } from '../../types/quiz.type';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() question!: Quiz;

}
