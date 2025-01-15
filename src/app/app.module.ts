import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllQuizzesComponent } from './pages/all-quizzes/all-quizzes.component';
import { QuizCategoriesComponent } from './features/all-quizzes/components/quiz-categories/quiz-categories.component';
import { QuizzesService } from './features/all-quizzes/services/quizzes.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuizCategoryComponent } from './features/all-quizzes/components/quiz-category/quiz-category.component';
import { QuizComponent } from './features/all-quizzes/components/quiz/quiz.component';
import { QuestionComponent } from './features/all-quizzes/components/question/question.component';
import { QuestionStrategyRendererComponent } from './features/all-quizzes/components/question/question-strategy-renderer/question-strategy-renderer.component';
import { MultipleComponent } from './features/all-quizzes/components/question/question-strategy-renderer/multiple/multiple.component';
import { BooleanComponent } from './features/all-quizzes/components/question/question-strategy-renderer/boolean/boolean.component';
import { FreetextComponent } from './features/all-quizzes/components/question/question-strategy-renderer/freetext/freetext.component';

@NgModule({
  declarations: [
    AppComponent,
    AllQuizzesComponent,
    QuizCategoriesComponent,
    QuizCategoryComponent,
    QuizComponent,
    QuestionComponent,
    QuestionStrategyRendererComponent,
    MultipleComponent,
    BooleanComponent,
    FreetextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [QuizzesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
