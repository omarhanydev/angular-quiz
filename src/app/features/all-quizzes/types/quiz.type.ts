export type Quiz = {
    category: string,
    type: string,
    difficulty: "easy" | "medium" | "hard",
    difficultyScore?: number,
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}