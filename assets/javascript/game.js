
    $(document).ready(function() {

        // set vars: number of guesses, wins, letter storage, letter array
        var maxGuesses = 4;
        var guessesLeft = maxGuesses;
        var myLibrary = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var userLetter = "";
        var userWin = 0;
        var userLoss = 0;
        var gameOver = false;

        $("#turn-count").html(guessesLeft + 1);
        $("#replay").hide();

        $(document).keyup(function(event) { /**********************/

            // set content
            function countGuesses() {
                if (guessesLeft > 0) {
                    $("#turn-count").html(guessesLeft);
                    gameOver = false;
                } else {
                    $("#turn-count").html(guessesLeft);

                    gameOver = true;
                }
            }

            if (gameOver === false) {
                // random number generator picks a letter from an array and stores it to a variable
                function thinkNumber() {
                    min = Math.ceil(0);
                    max = Math.floor(25);
                    myLetter = myLibrary[Math.floor(Math.random() * (max - min)) + min];
                    console.log("myLetter: " + myLetter);
                }

                countGuesses();
                thinkNumber();

                // user enters letter
                var userLetter = event.key.toUpperCase();
                console.log("userLetter: " + userLetter);

                if ($.inArray(userLetter, myLibrary) < 0) {
                    $(".user-guesses").append("<p>You must guess a <strong>letter</strong></p>");
                }
                // if userLetter = myLetter, +userWin
                else if (userLetter == myLetter) {
                    userWin++;
                    guessesLeft--;
                    $(".user-guesses").append("<p>Your guess: " + userLetter + " is correct.<br />Wins: " + userWin + "<br />Losses: " + userLoss + "<br />Your guesses so far: " + (maxGuesses - guessesLeft) + "</p>");
                    // if userLetter != myLetter, +userLoss
                } else {
                    userLoss++;
                    guessesLeft--;
                    $(".user-guesses").append("<p>Your guess: " + userLetter + " is incorrect.<br />Wins: " + userWin + "<br />Losses: " + userLoss + "<br />Your guesses so far: " + (maxGuesses - guessesLeft) + "</p>");
                }
                // Reset myLetter to a new random guess
                //thinkNumber();
                //countGuesses();
            } else {
                $("#game-end").html("GAME OVER");
                $("#replay").show();
                return
                // stop everything if you've got no guesses left
            }

            $("#replay").click(function() {
                location.reload();
            });
        }); /** end onclick **/
    });