import { Component, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Quiz } from '../../../types/quiz.type';

@Component({
  selector: 'app-question-strategy-renderer',
  templateUrl: './question-strategy-renderer.component.html',
  styleUrls: ['./question-strategy-renderer.component.scss']
})
export class QuestionStrategyRendererComponent {
  possibleAnswers: string[] = [];
  @Input() question!: Quiz;
  @ViewChild('componentRef', { read: ViewContainerRef, static: true }) componentRef!: ViewContainerRef;

  constructor(
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
    const componentClass = loadedComponent[`${this.question.type.charAt(0).toUpperCase()}${this.question.type.slice(1)}Component`];
    const componentRef: ComponentRef<any> = this.componentRef.createComponent(componentClass);
    componentRef.instance.possibleAnswers = this.possibleAnswers;
    if (componentRef.instance.onAnswerUpdated) {
      componentRef.instance.onAnswerUpdated.subscribe((val: any) => {
        console.log('Answer updated:', val);
      });
    }
  }
}
