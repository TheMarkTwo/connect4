<?php
$conn = mysqli_connect("localhost", "root", "", "connect4");
if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}

$player1 = $_POST['player1'];
$player2 = $_POST['player2'];
$data = [$player1, $player2];
echo json_encode($data);

$sql = "SELECT * FROM scoreboard WHERE PlayerName = '$player1'";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) === 0 && $player1 != ""){
    $sql = "INSERT INTO scoreboard (PlayerName, TotalWins) VALUES ('$player1', 0)";
    $conn->query($sql);
}

$sql = "SELECT * FROM scoreboard WHERE PlayerName = '$player2'";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result) === 0 && $player2 != ""){
    $sql = "INSERT INTO scoreboard (PlayerName, TotalWins) VALUES ('$player2', 0)";
    $conn->query($sql);
}

header("Location: c4.php");
?>