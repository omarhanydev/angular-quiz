import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllQuizzesComponent } from './pages/all-quizzes/all-quizzes.component';

const routes: Routes = [
  {
    path: '',
    component: AllQuizzesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
