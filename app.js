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

// start the game

	var messages = {
		text: ['Welcome to the quiz game!']
	}

	$(".js-welcome-message").html(messages.text[0]);

	$(".begin").on("click", function() {
    	$(".options").removeClass("hidden");
    	$(".js-welcome").hide();
	});




	var questionsAndAnswers = {
		question: ['Pick the fruit'],
		options: ['Pineapple', 'Porcupine', 'Police officer', 'Balloon', 'Ballerina', 'Banana'],
		answers: ['1','3']
	};

	var qSelector = 0;
	var o1Selector = 0;
	var o2Selector = 1;
	var o3Selector = 2;
	var ansSelector = 0;

	var score = {
		correct: 0,
	}

	// $(".submit").on("click", function() {
	// 	if (!$(".js-welcome").hasClass("hidden") {
	// 		$(this).addClass("hidden");
	// 	})



	    var currentQuestion = (questionsAndAnswers.question[qSelector]);
	    var currentOption1 = (questionsAndAnswers.options[o1Selector]);
	    var currentOption2 = (questionsAndAnswers.options[o2Selector]);
	    var currentOption3 = (questionsAndAnswers.options[o3Selector]);
	    var currentAnswer = (questionsAndAnswers.answers[ansSelector]);

	    $(".question").html(currentQuestion);
	    $("#o1").html(currentOption1);
	    $("#o2").html(currentOption2);
	    $("#o3").html(currentOption3);

	    qSelector = qSelector + 1;
	    o1Selector = o1Selector + 3;
	    o2Selector = o2Selector +3;
	    o3Selector = o3Selector +3;
	    ansSelector = ansSelector + 1;



	})



})