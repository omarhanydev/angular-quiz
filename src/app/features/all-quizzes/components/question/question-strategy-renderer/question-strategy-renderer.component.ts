import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Quiz } from '../../../types/quiz.type';

@Component({
  selector: 'app-question-strategy-renderer',
  templateUrl: './question-strategy-renderer.component.html',
  styleUrls: ['./question-strategy-renderer.component.scss']
})
export class QuestionStrategyRendererComponent {
  possibleAnswers: string[] = [];
  @Input() question!: Quiz;

  constructor(
    private componentRef: ViewContainerRef,
  ) { }

  ngOnChanges(): void {
    this.possibleAnswers = this.createPossibleAnswers();
    this.getQuestionStrategyComponent();
  }

  createPossibleAnswers() {
    const possibleAnswers = [...this.question.incorrect_answers || []];
    possibleAnswers.push(this.question.correct_answer);
    possibleAnswers.sort((a: string, b: string) => Math.random() - Math.random())
    return possibleAnswers;
  }

  async getQuestionStrategyComponent() {
    this.componentRef.clear();
    const loadedComponent = await import(`./${this.question.type}/${this.question.type}.component`);
    const componentInstance = this.componentRef.createComponent(loadedComponent[`${this.question.type.charAt(0).toUpperCase()}${this.question.type.slice(1)}Component`]);
    componentInstance.setInput('possibleAnswers', this.possibleAnswers);
    // componentInstance.onAnswerUpdated.subscribe((val: any) => console.log(val));
  }
}
