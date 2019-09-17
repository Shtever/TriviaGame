// Begin Timer
var score = 0;
//Questions

$("#submit").on("click", function (){
for(var i = 1; i <= 10; i++) {
    radios = document.getElementsByName("q" + i);
      if(radio.value == "correct") {
        score++;
        console.log(score);
        $("#score").text(score);
      }
    }
})