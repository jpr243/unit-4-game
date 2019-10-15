var randomNumber;
var losses = 0;
var wins = 0;
var score = 0;

var startReset = function() {
  $(".crystals").empty();

  var images = [
    "https://www.bing.com/th?id=OIP.sFi049q7QF6DTz0nZmQ6vgHaHg&pid=Api&rs=1",
    "http://solawakening.com/wp-content/uploads/2012/10/fantasy-crystal-field1.jpg",
    "https://cdn-images-1.medium.com/max/2600/0*AmwIyi21fDd9Guwz.jpg",
    "http://www.crystalmagic.com/assets/images/Amethyst%20Druse%20SM_8.jpg"
  ];

  randomNumber = Math.floor(Math.random() * 102) + 19;

  $("#random").html("" + randomNumber);
  $("#random").css({
    "background-color": "green",
    margin: "10px",
    "font-size": "50px",
    padding: "2px 0px 100px 2px",
    "text-align": "left"
  });

  for (var i = 0; i < 4; i++) {
    var randomCrystal = Math.floor(Math.random() * 12) + 1;

    var crystal = $("<div>");
    crystal.attr({
      class: "crystal",
      "num-random": randomCrystal
    });
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      "background-size": "cover"
    });

    $(".crystals").append(crystal);
  }
  $("#score").html(" " + score);
  $("#score").css({
    color: "white",
    "background-color": "teal",
    margin: "10px 5px 5px 20px",
    "font-size": "50px",
    padding: "2px 0px 100px 0px",
    "text-align": "left"
  });
};

startReset();

$(document).on("click", ".crystal", function() {
  var num = parseInt($(this).attr("num-random"));

  score += num;
  $("#score").html("" + score);

  console.log(score);

  if (score > randomNumber) {
    losses++;

    $("#losses").html("Losses:" + losses);

    score = 0;

    startReset();
  } else if (score === randomNumber) {
    wins++;

    $("#wins").html("Wins:" + wins);

    score = 0;
    startReset();
  }
});
