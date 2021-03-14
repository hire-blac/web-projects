$(function(){
  
  $("#go").click(function(){

    //function to check if car has won
    function finishedRace(){
      if(finished == false){
        finished = true;
      }
      else{
        position = 'second';
      }
    }
    
    //length of the race track
    var raceTrack = $("#race-track").width();

    //length of the car
    var carLength = $("#car1").width();

    //race time
    var raceTime1 = Math.floor(1 + (Math.random() * 5000));
    var raceTime2 = Math.floor(1 + (Math.random() * 5000));

    //finished race
    var finished = false;

    //position in race
    var position = 'first'

    //animate car
    $("#car1").animate({
      left: (raceTrack + 5) - carLength
    }, raceTime1, function(){
      //animation is complete
      finishedRace();

      //give feedback
      $("#race-info1 span").text("Finished at " + position + " position in "
          + raceTime1 + "seconds");
    });

    $("#car2").animate({
      left: (raceTrack + 5) - carLength
    }, raceTime2, function(){
      //animation is complete
      finishedRace();

      //give feedback
      $("#race-info2 span").text("Finished at " + position + " position in "
          + raceTime2 + "seconds")
    });

  });

  $("#reset").click(function(){
    $(".car").css("left","0");
    $("#race-info span").text('');
  });

});