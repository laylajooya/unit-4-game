$(document).ready(function(){

  // Selects random number between 19 and 120
  
  var randomNumber = Math.floor(Math.random() * 102) + 19;

  // Inserts number to html

  $("#random-number").text(randomNumber);

  // Selects random number for each crystal between 1 and 12
  
  var num1 = Math.floor(Math.random() * 12) + 1;
  var num2 = Math.floor(Math.random() * 12) + 1;
  var num3 = Math.floor(Math.random() * 12) + 1;
  var num4 = Math.floor(Math.random() * 12) + 1;

  // Assign 0 value to vars

  var counter = 0;
  var wins = 0;
  var losses = 0;
  

  // Function to reset game

  function reset() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#random-number").text(randomNumber);
    num1 = Math.floor(Math.random() * 12) + 1;
    num2 = Math.floor(Math.random() * 12) + 1;
    num3 = Math.floor(Math.random() * 12) + 1;
    num4 = Math.floor(Math.random() * 12) + 1;
    counter = 0;
    $("#total").text(counter);
  }

  // Win and lose function

  function win() {
    $("#gameAlert-text").text("You win!");
    wins++;
    $("#wins").text(wins);
    reset ();
  }

  function lose() {
    $("#gameAlert-text").text("You lose!");
    losses++;
    $("#losses").text(losses);
    reset ();
  }

  // Number that elements id was clicked on returning num between 1 and 12
  
  function num(myNumber) {
    if (myNumber == 1) {
      return num1;
    } else if (myNumber == 2) {
      return num2;
    } else if (myNumber == 3) {
      return num3;
    } else if (myNumber == 4) {
      return num4;
    }
  }

  // write dry function here
  for (var i = 1; i < 5; i++) {
    console.log("#crystal" + i)

    $("#crystal" + i).click(function() {
      // so we can clear the game alert text in here, how would we do that
      $("#gameAlert-text").text("");

      // retrieving the number from the elements id that was clicked
      myNumber = this.id.match(/\d+$/)[0];
      myNumber = parseInt(myNumber);

      // using the num() function to return the correct num[i] variable
      counter = counter + num(myNumber);
      $("#total").text(counter);
      
      if (counter == randomNumber) {
        win();
      } 
      else if (counter > randomNumber) {
        lose();
      }
    })
  }
});
