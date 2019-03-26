$(document).ready(function(){

  // Selects random number between 19 and 120
  
  var randomNumber = Math.floor(Math.random() * (101 + 1) + 19);

  // Inserts number to html

  $("#random-number").text(randomNumber);

  // Selects random number for each crystal between 1 and 12
  
  var num1 = Math.floor(Math.random() * 11 + 1)
  var num2 = Math.floor(Math.random() * 11 + 1)
  var num3 = Math.floor(Math.random() * 11 + 1)
  var num4 = Math.floor(Math.random() * 11 + 1)

  var counter = 0;
  var wins = 0;
  var losses = 0;



  // $("#wins").text(wins);
  // $("#losses").text(losses);

  function win() {
    wins++;
    $("#wins").text(wins);
  }

  function lose() {
    losses++;
    $("#losses").text(losses);
    
  }

  $("#crystal1").click(function() {
    counter = counter + num1;
    $("#total").text(counter);
      if (counter == randomNumber) {
        win();
      } 
      else if (counter > randomNumber) {
        lose();
      }
  })

  $("#crystal2").click(function() {
    counter = counter + num2;
    $("#total").text(counter);
      if (counter == randomNumber) {
        win();
      } 
      else if (counter > randomNumber) {
        lose();
      }
  })

  $("#crystal3").click(function() {
    counter = counter + num3;
    $("#total").text(counter);
      if (counter == randomNumber) {
        win();
      }
      else if (counter > randomNumber) {
        lose();
      }
  })

  $("#crystal4").click(function() {
    counter = counter + num4;
    $("#total").text(counter);
      if (counter == randomNumber) {
        win();
      } 
      else if (counter > randomNumber) {
        lose();
      }
  })

});

  // for (var i = 0; i < numberOptions.length; i++) {

  //   var iconCrystal = $("<img>");

  //   iconCrystal.addClass("crystal-icon");
  
  //     // Each imageCrystal will be given a src link to the crystal image
  //   iconCrystal.attr("src", "assets/images/iconfinder_Quartz_crystal_127307.png");
  
  //     // Each imageCrystal will be given a data attribute called data-crystalValue.
  //     // This data attribute will be set equal to the array value.
  //   iconCrystal.attr("data-crystalvalue", numberOptions[i]);
  
  //     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
  //   $("#crystals").append(iconCrystal);
  //   }

//   $("#crystal1").attr("data-crystalvalue", Math.random())
//   $("#crystal2").attr("data-crystalvalue", Math.random())
//   $("#crystal3").attr("data-crystalvalue", Math.random())
//   $("#crystal4").attr("data-crystalvalue", Math.random())



  // // Here we created an on-click event that responds to button clicks of the crystal image.
  // $(".crystal-icon").on("click", function() {
    
  //   var crystalValue = ($(this).attr("data-crystalvalue"));
  //   crystalValue = parseInt(crystalValue);

  //   counter += crystalValue;

  //   // Clicking the button triggers an alert message.
  //   alert("Your new score is " + counter);

  //   if (counter === randomNumber) {
  //       alert("You win!");
  //   }
  //   else if (counter >= randomNumber) {
  //       alert("You lose!");
  //   }

  // });

// for (var i = 0; i < 4; i++) {
// numberOptions[i] = Math.floor((Math.random()*12)+1);