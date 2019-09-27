    var solutions = ["Thugz Mansion", "Gin & Juice", "Staten Island", "Mobb Deep", "Intergalactic", "East Orange, NJ", "Del tha Funkee Homosapien", "Salt-n-Pepa & Heavy D", "69 Boyz", "Method Man"];
    console.log("ANSWERS:");
    for(var i = 0; i < solutions.length; i++){
    console.log((solutions[i]))
    }

var questionArray = [{
        question:"1. Tupac Shakur rapped that he wanted to spend the afterlife in this locale",
        answers:["Thugz Mansion", "Gangsterz Grotto", "Hustler Heaven", "Pimp's Paradise"],
        correct: "Thugz Mansion",
    },  {
        question:"2. In 1993, Snoop Dogg spent his time laid back with this combination:",
        answers:["Guns & Drugs", "Gin & Juice", "Homework & Volunteering", "Hookers & Blow"],
        correct: "Gin & Juice",
    },  {
        question:"3. What NY borough did the Wu-Tang Clan refer to as 'Shaolin'?",
        answers:["Brooklyn", "Queens", "Staten Island", "The Bronx"],
        correct: "Staten Island",
    },  {
        question:"4. 'Havoc' & 'Prodigy' were the stage names of this duo who hailed from Queens.",
        answers:["De La Soul", "M.O.P", "Gang Starr", "Mobb Deep",],
        correct: "Mobb Deep",
    },  {
        question:"5. Which Beastie Boys music video featured a giant robot destroying a model city?",
        answers:["Sabotage", "Brass Monkey", "No Sleep Till Brooklyn", "Intergalactic"],
        correct: "Intergalactic",
    },  {
        question:"Naughty By Nature hailed from THIS city:",
        answers: ["East Orange, NJ", "Brooklyn, NY", "Los Angeles, CA", "Detroit, MI"],
        correct: "East Orange, NJ",
    },  {
        question:"7. 'Mista Dobalina' by THIS artist peaked at #6 on the Billboard charts in 1991.",
        answers:["A Tribe Called Quest", "Ice Cube", "Del tha Funkee Homosapien", "Public Enemy"],
        correct: "Del tha Funkee Homosapien",
    },  {
        question:"8. Notorious B.I.G. claimed he used to read 'Word Up!' magazine with who his limo?",
        answers:["Funkmaster Flex & Dr. Dre", "Salt-n-Pepa & Heavy D", "Nas & Lil Kim", "Public Enemy"],
        correct: "Salt-n-Pepa & Heavy D",
    },  {
        question:"9. Which group put out the track 'Tootsie Roll' in 1994?",
        answers:["Ghost Town DJ's", "Tag Team", "69 Boyz", "The Luniz"],
        correct: "69 Boyz",
    },  {
        question:"10. Who was NOT a member of the rap group NWA?",
        answers:["Method Man", "Eazy-E", "DJ Yella", "Ice Cube"],
        correct: "Method Man",
    },  
] 

// Start game
$("#start").on('click', function(){
    trivia.gameStart();
})

$(document).on('click', '#submit', function(){
    trivia.gameover();
})

var trivia = {
    right: 0,
    wrong: 0,
    timer: 90,

    //start game function
    gameStart: function(){
        $("#start").hide();
        $("#submit").show();

        // Timer
        timer = setInterval(trivia.countdown, 1000);
        $("#display").prepend('<h3>Time Remaining: <span id="timer">90</span> seconds </h3>');
        for (var i = 0; i < questionArray.length; i++){
            $("#display").append("<br><h3>" + questionArray[i].question + "</h3>")
            for (var j = 0; j < questionArray[i].answers.length; j++){
                $("#display").append("<input type='radio' name='question "+ i +"' value='" + questionArray[i].answers[j] + "'>" + questionArray[i].answers[j] +"<br>")
            }
        }
        // Submit button
        $("#display").append('<br><br><a class="btn" href="#" id="submit" role="button">Submit</a>')
    },

    // Timer countdown function
    countdown: function(){
        trivia.timer--;
        $("#timer").html(trivia.timer);
        if(trivia.timer == 0){
            console.log("You're outta time!")
            trivia.gameover();
        }
    },
    // Check for right answers
    gameover: function(){
        $.each($("input[name = 'question 0']:checked"), function(){
            if($(this).val() == questionArray[0].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 1']:checked"), function(){
            if($(this).val() == questionArray[1].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 2']:checked"), function(){
            if($(this).val() == questionArray[2].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 3']:checked"), function(){
            if($(this).val() == questionArray[3].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 4']:checked"), function(){
            if($(this).val() == questionArray[4].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 5']:checked"), function(){
            if($(this).val() == questionArray[5].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 6']:checked"), function(){
            if($(this).val() == questionArray[6].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        $.each($("input[name = 'question 7']:checked"), function(){
            if($(this).val() == questionArray[7].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });

        $.each($("input[name = 'question 8']:checked"), function(){
            if($(this).val() == questionArray[8].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });

        $.each($("input[name = 'question 9']:checked"), function(){
            if($(this).val() == questionArray[9].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });

        $.each($("input[name = 'question 10']:checked"), function(){
            if($(this).val() == questionArray[10].correct){
                trivia.right++;
            } else {
                trivia.wrong++;
            }
        });
        this.result()
    },

// Display results after game is finished
    result: function(){
        clearInterval(timer);
        $("#display").html("<h2><strong>Bow down! Here's how you did:</strong></h2>");
        $("#display").append("<h3>Right Answers: " + this.right + "</h3>");
        $("#display").append("<h3>Wrong Answers: " + this.wrong + "</h3>");
        $("#display").append("<h3>Unanswered: " + (questionArray.length-(this.wrong + this.right)) + "</h3>");   
    }
}