<?php
$conn = mysqli_connect("localhost", "root", "", "connect4");
if(!$conn){
    die("Connection failed: ".mysqli_connect_error());
}
echo "<div id='scoreboard'>";
echo "<table id='scoreboardTable'>";
echo "<tr>";
echo "<th>Igrac</th>";
echo "<th>Broj pobjeda</th>";
echo "</tr>";
$sql = "SELECT * FROM scoreboard WHERE TotalWins > 0 ORDER BY TotalWins DESC ";
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