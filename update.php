<?php
$player = $_POST['player'];
updateScore($player);

function updateScore($player){
    if ($player != "Crveni" && $player != "Zuti"){
        $conn = mysqli_connect("localhost", "root", "", "connect4");
        if(!$conn){
            die("Connection failed: ".mysqli_connect_error());
        }
        $sql = "SELECT * FROM scoreboard WHERE PlayerName = '$player'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        $score = $row['TotalWins'];
        $score++;
        $sql = "UPDATE scoreboard SET TotalWins = '$score' WHERE PlayerName = '$player'";
        $conn->query($sql);
    }
}
?>