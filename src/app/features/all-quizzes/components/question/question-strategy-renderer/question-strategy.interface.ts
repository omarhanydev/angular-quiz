import { EventEmitter } from "@angular/core";

export interface QuestionStrategyInterface {
    onAnswerUpdated: EventEmitter<any>
}
