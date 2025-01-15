import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionStrategyRendererComponent } from './question-strategy-renderer.component';

describe('QuestionStrategyRendererComponent', () => {
  let component: QuestionStrategyRendererComponent;
  let fixture: ComponentFixture<QuestionStrategyRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionStrategyRendererComponent]
    });
    fixture = TestBed.createComponent(QuestionStrategyRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
