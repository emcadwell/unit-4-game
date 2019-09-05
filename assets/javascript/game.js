var targetScore;
var totalScore;
var winCount;
var lossCount;
var redCount;
var blueCount;
var yellowCount;
var greenCount;


$(document).ready(function() {

    var targetScore = Math.floor(Math.random()*101+19);
    
    $("#numberToGet").text(targetScore);
    
    var totalScore= 0;
    var wins = 0;
    var losses = 0;
    
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    
    function getCrystalhandler(redCount, blueCount, yellowCount, greenCount) {
        return function() {
            
        }
    }
    function reset() {
        targetScore = Math.floor(Math.random()*120+1);
        console.log(targetScore);
        $("#numberToGet").text(targetScore);
        var redCount = Math.floor(Math.random()*12+1);
        var blueCount = Math.floor(Math.random()*12+1);
        var greenCount = Math.floor(Math.random()*12+1);
        var yellowCount = Math.floor(Math.random()*12+1);
        totalScore = 0;
        $("#score").text(totalScore);
    }
    
    function winner() {
        alert("You Won!!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }
    
    function loser() {
        alert("You Lose!!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }
    
    $("#image1").on("click", function() {
        totalScore = totalScore + num1;
        console.log("New totalScore " + totalScore);
        $("#score").text(totalScore);
    
        if (totalScore === random) {
            winner()
        }
    
        else if (totalScore > random) {
            loser()
        } 
    })

    $("#red").on("click", )
});
