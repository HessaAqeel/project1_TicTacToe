console.log("Test!");

var gamer = 'X';
function change1() {

    $(event.target).text(gamer) // This line allows the X&O to change depends on the place was clicked 
    $(event.target).off("click"); // This line prevents the user from choosing the same spot twice

    if (gamer === "O") {
        gamer = "X";
    } else if (gamer === "X") {
        gamer = 'O';

        // } else { gamer = "X";

    } // if statement to change turns between X and O 

    theWinner(); // Calling the fuction to show the winner .


} $('td').on('click', change1);



function theWinner() {

    if (($('#td1').text() !== '') && ($('#td1').text() === $('#td2').text()) && ($('#td2').text() === $('#td3').text())) {
        $('h2').text($('#td3').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td4').text() !== '') && ($('#td4').text() === $('#td5').text()) && ($('#td5').text() === $('#td6').text())) {
        $('h2').text($('#td6').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td7').text() !== '') && ($('#td7').text() === $('#td8').text()) && ($('#td8').text() === $('#td9').text())) {
        $('h2').text($('#td9').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td1').text() !== '') && ($('#td1').text() === $('#td4').text()) && ($('#td4').text() === $('#td7').text())) {
        $('h2').text($('#td7').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td2').text() !== '') && ($('#td2').text() === $('#td5').text()) && ($('#td5').text() === $('#td8').text())) {
        $('h2').text($('#td8').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td3').text() !== '') && ($('#td3').text() === $('#td6').text()) && ($('#td6').text() === $('#td9').text())) {
        $('h2').text($('#td9').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td5').text() !== '') && ($('#td1').text() === $('#td5').text()) && ($('#td5').text() === $('#td9').text())) {
        $('h2').text($('#td9').text() + ' Wins ');
        reset();
        stopUserClicks();
    } else if (($('#td5').text() !== '') && ($('#td3').text() === $('#td5').text()) && ($('#td5').text() === $('#td7').text())) {
        $('h2').text($('#td7').text() + ' Wins ');
        reset();
        stopUserClicks();

    } else if (($('#td1').text() !== '') && ($('#td2').text() !== '') && ($('#td3').text() !== '') && ($('#td4').text() !== '') && ($('#td5').text() !== '') && ($('#td6').text() !== '') && ($('#td7').text() !== '') && ($('#td8').text() !== '') && ($('#td9').text() !== '')) {
        $('h2').text(' Tie ');
        reset();
        stopUserClicks();

    }

}
function reset() {
    $('td').text('');
} // To enable the board to clear up after someone wins or after a toe 

function stopUserClicks() {

    $('td').off('click');

} // After the game ends user can never press any empty cell. 
