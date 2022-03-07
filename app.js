// @ts-check

import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz the main quiz object 
 * @param {UI} ui the ui object
 */

const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        //console.log("finalizó");
        //console.log(quiz.score);
        ui.showScore(quiz.score);
    } else {
        ui.showQuestion(quiz.getQuestionIndex().text);
        //console.log (quiz.getQuestionIndex().choices);
        ui.showChoices(quiz.getQuestionIndex().choices , (currentChoices) => {
        quiz.guess(currentChoices);
        renderPage(quiz, ui);
        });
        ui.showProgress(quiz.questionIndex + 1,quiz.questions.length);
    }
};


function main() {
    const quiz = new Quiz(questions);
    //console.log(quiz);
    const ui = new UI();
    renderPage (quiz, ui);
    
}

main ();



//console.log(question[0].correctAnswer('aaaa'));

