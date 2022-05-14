<?php
$conn = mysqli_connect("localhost", "root", "", "connect4");
if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}
echo "<div id='scoreboard'>";
echo "<table id='scoreboardTable'>";
echo "<tr>";
echo "<th>Player</th>";
echo "<th>Total Wins</th>";
echo "</tr>";
$sql = "SELECT * FROM scoreboard";
$result = mysqli_query($conn, $sql);
while($row = mysqli_fetch_assoc($result)){
    echo "<tr>";
    echo "<td>".$row['PlayerName']."</td>";
    echo "<td>".$row['TotalWins']."</td>";
    echo "</tr>";
}
echo "</table>";
echo "</div>";
?>