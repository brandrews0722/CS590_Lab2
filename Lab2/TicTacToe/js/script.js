var TicTacToe = angular.module('TicTacToe', []);
var gameRunning = 0;
var columns = [
    {
        col: 1,
        hasBeenSet: false
    },
    {
        col: 2,
        hasBeenSet: false
    },
    {
        col: 3,
        hasBeenSet: false
    },
    {
        col: 4,
        hasBeenSet: false
    },
    {
        col: 5,
        hasBeenSet: false
    },
    {
        col: 6,
        hasBeenSet: false
    },
    {
        col: 7,
        hasBeenSet: false
    },
    {
        col: 8,
        hasBeenSet: false
    },
    {
        col: 9,
        hasBeenSet: false
    },
]
var turn = "x";


TicTacToe.controller('TicTacToeController', function ($scope){

    $scope.newImg = "img/placeholder.jpg";

    $scope.setMark = function(columnNumber){

        gameRunning += 1;

        if(gameRunning === 99)
            return;

        if (columns[columnNumber - 1].hasBeenSet === true){
            window.alert("This cell has already been selected!  Please select another.");
            return;}
        else
            columns[columnNumber - 1].hasBeenSet = true;

        /*Set image for the click*/
        var ele = "square" + columnNumber;
        var image = "img/blue_" + turn + ".png";
        var eleToUpdate = document.getElementById(ele);
        eleToUpdate.src = image;

        if(gameRunning >= 5) {
            var validateObj = validate();
            if (validateObj.gameOver) {
                validateObj.s1.src = validateObj.s1.src.replace("blue", "red");
                validateObj.s2.src = validateObj.s2.src.replace("blue", "red");
                validateObj.s3.src = validateObj.s3.src.replace("blue", "red");
                gameRunning = 99;

                document.getElementById("winner").innerText = "Player " + turn.toUpperCase() + " wins!  Refresh the page to play again.";
            }
        }

        if (turn === "x")
            turn = "o";
        else
            turn = "x";
    }


    var validate = function(){
        //elements
        var square1 = document.getElementById("square1");
        var square2 = document.getElementById("square2");
        var square3 = document.getElementById("square3");
        var square4 = document.getElementById("square4");
        var square5 = document.getElementById("square5");
        var square6 = document.getElementById("square6");
        var square7 = document.getElementById("square7");
        var square8 = document.getElementById("square8");
        var square9 = document.getElementById("square9");
        var placeHolderImg = "img/placeholder.jpg";
        /*validate vertical*/
        if (square1.getAttribute("src") != placeHolderImg && square1.getAttribute("src") === square4.getAttribute("src") && square1.getAttribute("src") === square7.getAttribute("src"))
            return {s1: square1, s2: square4, s3: square7, gameOver: true};
        if (square2.getAttribute("src") != placeHolderImg && square2.getAttribute("src") === square5.getAttribute("src") && square2.getAttribute("src") === square8.getAttribute("src"))
            return {s1: square2, s2: square5, s3: square8, gameOver: true};
        if (square3.getAttribute("src") != placeHolderImg && square3.getAttribute("src") === square6.getAttribute("src") && square3.getAttribute("src") === square9.getAttribute("src"))
            return {s1: square3, s2: square6, s3: square9, gameOver: true};

        /*validate horizontal*/
        if (square1.getAttribute("src") != placeHolderImg && square1.getAttribute("src") === square2.getAttribute("src") && square1.getAttribute("src") === square3.getAttribute("src"))
            return {s1: square1, s2: square2, s3: square3, gameOver: true};
        if (square4.getAttribute("src") != placeHolderImg && square4.getAttribute("src") === square5.getAttribute("src") && square4.getAttribute("src") === square6.getAttribute("src"))
            return {s1: square4, s2: square5, s3: square6, gameOver: true};
        if (square7.getAttribute("src") != placeHolderImg && square7.getAttribute("src") === square8.getAttribute("src") && square7.getAttribute("src") === square9.getAttribute("src"))
            return {s1: square7, s2: square8, s3: square9, gameOver: true};

        /*validate diagonal*/
        if (square1.getAttribute("src") != placeHolderImg && square1.getAttribute("src") === square5.getAttribute("src") && square1.getAttribute("src") === square9.getAttribute("src"))
            return {s1: square1, s2: square5, s3: square9, gameOver: true};
        if (square3.getAttribute("src") != placeHolderImg && square3.getAttribute("src") === square5.getAttribute("src") && square3.getAttribute("src") === square7.getAttribute("src"))
            return {s1: square3, s2: square5, s3: square7, gameOver: true};

        return {gameOver: false};
    }
});