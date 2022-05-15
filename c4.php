<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="app.js"></script>
    <title>Connect4</title>
</head>
<body onload="highlightPlayer(0), setPlayerNames()">
<?php include 'scoreboard.php';?>
    <table cellspacing="10" id="resetka">
        <script>
            tbl = document.getElementById("resetka");
            for (let i = 0; i < 6; i++) {
                const tr = tbl.insertRow();
                for (let j = 0; j < 7; j++){
                    const td = tr.insertCell();
                    td.setAttribute('id', `a${i}/${j}`)
                    if (i == 5) {
                        td.setAttribute('onclick', 'selectCell('+ j +')');
                        td.style.cssText = 'cursor: pointer;';
                    }
                }
            }
        </script>
    </table>
    <div id="score">
        <p id="player1">Zuti: <span id="player1Score">0</span></p>
        <p id="player2">Crveni: <span id="player2Score">0</span></p>
        <button id="restart" onclick="resetGame()">Restart</button>
    </div>
</body>
</html>
