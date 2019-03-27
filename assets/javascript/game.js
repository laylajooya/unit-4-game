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

  var counter = 0;
  var wins = 0;
  var losses = 0;
  

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

      // boooooooom i think your game is ready for primetime 

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

// var crystal1 = Math.floor(Math.random() * 12) + 1;
// $("#img1").html("<img src=" + "assets/images/ iconfinder_Emerald_127302.png" + " data-crystalvalue=" + crystal1 + ">")

// var crystal2 = Math.floor(Math.random() * 12) + 1;
// $("#img2").html("<img src=" + "assets/images/ iconfinder_Nephrite_pyramid_127308" + " data-crystalvalue=" + crystal2 + ">")

// var crystal3 = Math.floor(Math.random() * 12) + 1;
// $("#img3").html("<img src=" + "assets/images/ iconfinder_Quartz_crystal_127307" + " data-crystalvalue=" + crystal3 + ">")

// var crystal4 = Math.floor(Math.random() * 12) + 1;
// $("#img4").html("<img src=" + "assets/images/ iconfinder_Zircon_127304.png" + " data-crystalvalue=" + crystal4 + ">")

// $("img").click(function() {
//   var crystalValue = ($(this).attr("data-crystalvalue"));
//   //   crystalValue = parseInt(crystalValue);

//   //   counter += crystalValue;
