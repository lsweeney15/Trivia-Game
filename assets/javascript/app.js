$('#start').on('click', function () {
  game.start();
})

$(document).on("click", "#end", function () {
  game.done();
})

var questions = [{
  question: '1. In Season 6, Episode 14, "Sabre", what famous actor is featured as himself in the Sabre orientation video?',
  answers: ["Christian Slater", "Johnny Depp", "Tom Hanks", "Joe Rogan"],
  correctAnswer: "Christian Slater"
}, {

  question: "2. In Season Two, Episode Two, 'Sexual Harassment', What is on Todd Packer's vanity license plate?",
  answers: ['LUVMKR', 'WLHUNG', 'TODPKR', 'BGDADDY'],
  correctAnswer: 'WLHUNG'
}, {

  question: '3. In Season 3, Episdoe 22, "Beach Games" who gets abandoned in the lake wearing a sumo costume?',
  answers: ["Andy", "Stanley", "Dwight", "Phyllis"],
  correctAnswer: "Andy"
}, {

  question: "4. Which of the following is NOT the name of one of Michael Scott’s alter egos",
  answers: ["Ping", "Michel Klump", "Agent Michael Scarn", "Mark Greg Sputnik"],
  correctAnswer: "Mark Greg Sputnik"
}, {

  question: "5. In Season Five, Episode 20, 'Dream Team' Michael Scott Paper Company meets with an investor.  Who is it?",
  answers: ["Vikram", "Nana", "Pam’s Mom", "David Wallace"],
  correctAnswer: "Nana"
}];

var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,
  countdown: function () {
    game.counter--;
    $('#counter').html(game.counter);
    if (game.counter <= 0) {
      alert("You have been demoted!");
      game.done();
    }
  },
  start: function () {
    timer = setInterval(game.countdown, 1000);
    $('#subwrapper').append('<h2>Time Remaining: <span id="counter">60</span> Seconds</h2>');
    $("#start").remove();
    $(".rules").remove();
    for (var i = 0; i < questions.length; i++) {
      $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        $("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" + questions[i].answers[j] + " '>" + questions[i].answers[j])
      }
    }
    $("#subwrapper").append('<br><button id="end">Submit</button>')
  },

  done: function () {
    $.each($("input[name='question-0]':checked"), function () {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1]':checked"), function () {
      if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2]':checked"), function () {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3]':checked"), function () {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4]':checked"), function () {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5]':checked"), function () {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function () {
    clearInterval(timer);

    $('#subwrapper').html("<h2>All done!</h2>");
    $('#subwrapper').append("<h3>Correct Answers: '+this.correct+'</h3>");
    $('#subwrapper').append("<h3>Incorrect Answers: '+this.incorrect+'</h3>");
    S("#subwrapper").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct() + "</h3>")) + "</h3>");
  }
}