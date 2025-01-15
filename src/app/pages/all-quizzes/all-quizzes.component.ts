import { Component, OnInit } from '@angular/core';
import { QuizzesService } from 'src/app/features/all-quizzes/services/quizzes.service';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from 'src/app/features/all-quizzes/types/quiz.type';
import { DIFFICULTY_SCORES } from 'src/app/features/all-quizzes/enums/difficulty-scores';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.scss']
})
export class AllQuizzesComponent implements OnInit {
  quizzes: Quiz[] = [];
  activeQuestions: Quiz[] = [];
  activeCategory: string | null = null;
  startQuiz: boolean = false;

  constructor(
    private quizzesService: QuizzesService,
    private toastrService: ToastrService,
  ) {

  }

  ngOnInit(): void {
    this.quizzesService.getAllQuizzes().subscribe((res) => {
      this.toastrService.success('Successfully loaded quizzes');
      this.quizzes = res as Quiz[];
    }, error => {
      this.toastrService.error('Error loading data ..');
    })
  }

  setActiveCategory(category: string) {
    this.startQuiz = false;
    this.activeCategory = category;
    this.activeQuestions = this.quizzes
      .filter((question: Quiz) => question.category === this.activeCategory)
      .map((q: Quiz) => ({ ...q, difficultyScore: DIFFICULTY_SCORES[q.difficulty] }))
      .sort((a: Quiz, b: Quiz) => (a.difficultyScore || 0) - (b.difficultyScore || 0));
    this.startQuiz = true;
  }

  get categories() {
    const categories: any = [];
    this.quizzes.map((quiz: Quiz) => {
      if (!categories.find((c: string) => c == quiz.category)) {
        categories.push(quiz.category);
      }
    });
    return categories;
  }
}
