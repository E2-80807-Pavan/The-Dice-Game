var playerone = prompt("enter your name")
var playertwo = prompt("enter your name")

document.getElementById('one').innerHTML = playerone;
document.getElementById('two').innerHTML = playertwo;

document.getElementById('tableheading1').innerHTML = playerone;
document.getElementById('tableheading2').innerHTML = playertwo;


var count = 0;
var cou = 0;
var draw = 0;
var remain = 10;
var click = 0;
var a;
var b;

function rollDice() {
click++;
if (click<=10) {

      var number1 = Math.floor(Math.random()*6+1);
      var image1 = "images/dice" + number1 + ".png" ;
      document.getElementById('img1').setAttribute("src", image1);

      var number2 = Math.floor(Math.random()*6+1);
      var image2 = "images/dice" + number2 + ".png" ;
      document.getElementById('img2').setAttribute("src", image2);
}else {

}

 if (number1>number2) {
      document.getElementById('heading').innerHTML = playerone + " Won The Round.";
      count++;
      remain--;
      if (remain<0 && count<10) {
        document.getElementById('heading2').innerHTML = "your game is over! Click on View Score To See The Result.";
        document.getElementById('bttn').style.opacity = "0";
        document.getElementById('bttn-score').style.zIndex = "1";
      }
      else{
        document.getElementById('heading2').innerHTML = remain + " Chance Is Remaining To Spin The Dice.";
        var a = document.getElementById('colume1').innerHTML = count;
      }


}else if (number1<number2) {
       document.getElementById('heading').innerHTML = playertwo + " Won The Round.";
       cou++;
       remain--;
       if (remain<0 && cou<10) {
         document.getElementById('heading2').innerHTML = "your game is over! Click on View Score To See The Result.";
         document.getElementById('bttn').style.opacity = "0";
         document.getElementById('bttn-score').style.zIndex = "1";
       }
       else {
         document.getElementById('heading2').innerHTML = remain + " Chance Is Remaining To Spin The Dice.";
         var b = document.getElementById('colume2').innerHTML = cou;
       }
}else {
       document.getElementById('heading').innerHTML =  "Round is Draw.";
       draw++;
       remain--;
       if (remain<0 && draw<10) {
        document.getElementById('heading2').innerHTML = "your game is over! Click on View Score To See The Result.";
        document.getElementById('bttn').style.opacity = "0";
        document.getElementById('bttn-score').style.zIndex = "1";
       }
       else {
        document.getElementById('heading2').innerHTML = remain + " Chance Is Remaining To Spin The Dice.";
        document.getElementById('colume3').innerHTML = draw;
       }
      }


      /* For score board that gives who won the game*/
      if (a>b) {
          document.getElementById('viewScoreheading').innerHTML = "Congratulations! "
          document.getElementById('viewScoreheading1').innerHTML =  playerone + " Won The Game"
      }else {
        document.getElementById('viewScoreheading').innerHTML = "Congratulations! "
        document.getElementById('viewScoreheading1').innerHTML = playertwo + " Won The Game"
      }
}

/* For view scores*/
function viewScore() {
        document.getElementById('scoreboard').style.display = "block";
        document.getElementById('screen').style.display = "none";
  }
