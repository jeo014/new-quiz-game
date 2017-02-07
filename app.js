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
  
    var quizLength = '3';

    var questionsAndAnswers = [
    	{
    		question: 'Pick the fruit:',
    		o1: 'Pineapple',
    		o2: 'Police Officer',
    		o3: 'Porcupine',
    		answer: '1'
    	},
    	{
    		question: 'Pick the animal:',
    		o1: 'Orange',
    		o2: 'Octopus',
    		o3: 'Ocean',
    		answer: '2'
    	},
    	{
    		question: 'Pick the superhero:',
    		o1: 'Catman',
    		o2: 'Ratman',
    		o3: 'Batman',
    		answer: '3'
    	}
    	];

// selectors to progress through QA arrays

	var qSelector = 0;
	
    var questionNumber = 0;
  
// set score
    var score = {
          correct: '0',
    }

// triggered on button click

	$(".increment").on("click", function() {

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

	    var currentQuestion = (questionsAndAnswers[qSelector].question);
	    var currentOption1 = (questionsAndAnswers[qSelector].o1);
	    var currentOption2 = (questionsAndAnswers[qSelector].o2);
	    var currentOption3 = (questionsAndAnswers[qSelector].o3);
        var currentAnswer = (questionsAndAnswers[qSelector].answer);

	    $(".question").html(currentQuestion);
	    $("#o1").html(currentOption1);
	    $("#o2").html(currentOption2);
	    $("#o3").html(currentOption3);

// increment everything
		questionNumber = questionNumber + 1;
		qSelector = qSelector + 1;

// show question number
		$(".question-number").html("Question " + questionNumber + " of " + quizLength);
      
// compare selected answer with correct answer and display result

	     if ($('input[name="options"]:checked').val() == currentAnswer) {
			score.correct++;
			$(".js-results-message").html("Yeah! You answered the last question correctly!");
	     }

	     else {
	     	$(".js-results-message").html("Bummer! Your last answer was incorrect :(");
	     }
// // but don't display the result message for the first question
		if (questionNumber == 1){
			$(".js-results-message").addClass("hidden");
		}
		else {
			$(".js-results-message").removeClass("hidden");
		}

// show answer
         $(".answer-display").html("The answer is " + currentAnswer)
      
// show score
		$(".score-display").html("Your score is " + score.correct + " out of " + quizLength);		

	    console.log($('input[name="options"]:checked'));
	    console.log($('input[name="options"]:checked').val());
	    console.log(currentAnswer);
	    console.log(score);
      
// end game
        if (questionNumber > quizLength) {
          $(".js-question, .js-options, .submit, .score-display, .question-number").addClass("hidden");
          $(".js-results-message").html("Game Over. You scored " + score.correct + " out of " + quizLength);
          $(".js-results-message").append('<br><button class="reload">Begin Again</button></br>');
        };
      
	})
    
// reload page    
    $(".js-results-message").on("click", ".reload", function(){
      location.reload();
    })
    
}) 