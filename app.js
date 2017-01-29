//Use a JS object to separately hold each group of: questions, choices and correct answers.
//Use a JS function so that when <button> is clicked, it:
//**removes the current text from the <.questions> DIV
//**clears the radio buttons
//**adds the next question's text from <allQuestions> to the <.questions> DIV
//**adds the next anwers the radio buttons 
//Use a JS object to store each of the user's answers, which are determined by which
//radio button is selected when <button> is clicked. 
//If user clicks <button> without first selecting a radio button, do not update the form, and
//do not store their answer. Instead, alert the user.
//On the final page, let the user know they are done. Tally and display the total
//amount of correct answers. 

$(function() {

// display welcome text

	var messages = {
		text: ['Welcome to the quiz game!']
	}

	$(".js-welcome-message").html(messages.text[0]);

// global questions and answers

	var questionsAndAnswers = {
		question: ['Pick the fruit'],
		options: ['Pineapple', 'Porcupine', 'Police officer', 'Balloon', 'Ballerina', 'Banana'],
		answers: ['1','3']
	};

// selectors to progress through QA arrays

	var qSelector = 0;
	var o1Selector = 0;
	var o2Selector = 1;
	var o3Selector = 2;
	var ansSelector = 1;

    var currentQuestion = (questionsAndAnswers.question[qSelector]);
    var currentOption1 = (questionsAndAnswers.options[o1Selector]);
    var currentOption2 = (questionsAndAnswers.options[o2Selector]);
    var currentOption3 = (questionsAndAnswers.options[o3Selector]);
    var currentAnswer = (questionsAndAnswers.answers[ansSelector]);

// question and score count

	var score = {
		correct: 0,
		incorrect: 0,
	};

	var questionNumber = 0;


// WHEN USER HITS 'BEGIN'
	$(".begin").on("click", function() {

// hide welcome text and show question and options
    	$(".js-question, .js-options").removeClass("hidden");
    	$(".js-welcome").hide();


// add hidden classes to keep welcome text hidden

		if(!$(".js-welcome").hasClass("hidden")) {
			$(".js-welcome").addClass("hidden");
		};

// show questions and submit button		

		if ($(".js-question, .js-options, .submit").hasClass("hidden")) {
			$(this).removeClass("hidden");
		};

	    $(".question").html(currentQuestion);
	    $("#o1").html(currentOption1);
	    $("#o2").html(currentOption2);
	    $("#o3").html(currentOption3);

// show score and question number
		$(".score-display").html("Your score is " + score.correct + " out of 5");
		$(".question-number").html("Question " + questionNumber + " of 5");
	});

// WHEN USER SUBMITS A QUESTION

	$(".submit").on("click", function() {

// reset questions

	    qSelector = qSelector + 1;
	    o1Selector = o1Selector + 3;
	    o2Selector = o2Selector +3;
	    o3Selector = o3Selector +3;
	    ansSelector = ansSelector + 1;

// increment question number
		questionNumber = questionNumber +1;

// check answer 
		if ($('input[name="radios"]:checked').val() == currentAnswer) {
			score.correct++;
		}
		else {
			score.incorrect++;
		}
	})
console.log(score);
})




