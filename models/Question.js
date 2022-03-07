export class Question {
    
    /**
     * 
     * @param {string} text this is the text of the question 
     * @param {string[]} choices this is the choices of the question 
     * @param {string} answer this is the answer of the question 
     */

    constructor (text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.anwers = answer;
    }

    /**
     * 
     * @param {string} choices Some text to guess 
     * @returns {boolean} return true if the answer is correct
     */
    correctAnswer(choices) {
        return choices === this.anwers;
    }
  

}

//const question = new Question ();
/*
const question1 = new Question ();
const question2 = new Question ();
const question3 = new Question ();
*/

/*console.log (question,question1,question2,question3);*/

//const question2 = new Question();

/*
console.log (question.correctAnswer());
console.log (question2.correctAnswer);
*/

/** 
const question = new Question('cual es un lenguaje de programación ?', ['html','c'], 'c');
console.log(question.correctAnswer('c'));
**/