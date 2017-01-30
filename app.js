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


// hide welcome text and show question and options
	$(".begin").on("click", function() {
    	$(".js-question, .js-options").removeClass("hidden");
    	$(".js-welcome").hide();
	});

// global questions and answers

	var questionsAndAnswers = {
		question: ['Pick the fruit'],
		options: ['Pineapple', 'Porcupine', 'Police officer', 'Balloon', 'Ballerina', 'Banana', 'Orange', 'Opossum', 'Octopus', 'Avalanche', 'Apple', 'Avenue'],
		answers: ['1', '3', '1', '2']
	};

// selectors to progress through QA arrays

	var qSelector = 0;
	var o1Selector = 0;
	var o2Selector = 1;
	var o3Selector = 2;

	var questionNumber = 0;

	var score = 0;

// triggered on button click

	$("button").on("click", function() {

// clear radios
		$("input").prop("checked", false);

// add hidden classes to keep welcome text hidden

		if(!$(".js-welcome").hasClass("hidden")) {
			$(".js-welcome").addClass("hidden");
		};

// show questions and submit		

		if ($(".js-question, .js-options, .submit").hasClass("hidden")) {
			$(this).removeClass("hidden");
		};

// set questions

	    var currentQuestion = (questionsAndAnswers.question[qSelector]);
	    var currentOption1 = (questionsAndAnswers.options[o1Selector]);
	    var currentOption2 = (questionsAndAnswers.options[o2Selector]);
	    var currentOption3 = (questionsAndAnswers.options[o3Selector]);

	    $(".question").html(currentQuestion);
	    $("#o1").html(currentOption1);
	    $("#o2").html(currentOption2);
	    $("#o3").html(currentOption3);

// increment everything
		questionNumber = questionNumber + 1;
		qSelector = qSelector + 1;
	    o1Selector = o1Selector + 3;
	    o2Selector = o2Selector +3;
	    o3Selector = o3Selector +3;
	    ansSelector = ansSelector + 1;

// show question number
		$(".question-number").html("Question " + questionNumber + " of 4");

// compare selected answer with correct answer
		var ansSelector = 0;
	    var currentAnswer = (questionsAndAnswers.answers[ansSelector]);

	     if ($('input[name="options"]:checked').val() == currentAnswer) {
			score++;
	     }

// show score
		$(".score-display").html("Your score is " + score + " out of 4");		


	    console.log($('input[name="options]:checked').val());
	    console.log(currentAnswer);
	    console.log(score);

	})

})