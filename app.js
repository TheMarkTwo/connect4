var player = 0;
var turn = 0;
let names = getPlayerNamesFromStorage();

function selectCell(j){
    for(let i = 5; i >= 0; i--){
        let polje = document.getElementById(`a${i}/${j}`);
        if(polje.classList.contains("zuta") || polje.classList.contains("crvena")){
            continue;
        }
        else{
            if(player == 0){ 
                polje.classList.add("zuta");
                player = 1;
            }
            else{
                polje.classList.add("crvena");
                player = 0;
            }
            highlightPlayer(player);

            if(checkWin("zuta")){
                alert("Zuti je pobijedio!");
                clearBoard()
                updateScore(0, parseInt(document.getElementById("player1Score").innerHTML) + 1);
                UpdatePlayerScore(names[0]);
                player = 1;
            }
            else if(checkWin("crvena")){
                alert("Crveni je pobijedio!");
                clearBoard()
                updateScore(1, parseInt(document.getElementById("player2Score").innerHTML) + 1);
                UpdatePlayerScore(names[1]);
                player = 0;
            }
            else{
                turn++;
                if(turn == 42){
                    alert("Nerijeseno!");
                    clearBoard()
                }
            }
            break;
        }
    }
}

function checkWin(color){
    for(let i = 0; i <= 5; i++){
        for(let j = 0; j <= 6; j++){
            //horizontalno
            if(j <= 3){ 
                if(document.getElementById(`a${i}/${j}`).classList.contains(color) && document.getElementById(`a${i}/${j+1}`).classList.contains(color) && document.getElementById(`a${i}/${j+2}`).classList.contains(color) && document.getElementById(`a${i}/${j+3}`).classList.contains(color)){
                    return true;
                }
            }
            //vertikalno
            if(i <= 2){
                if(document.getElementById(`a${i}/${j}`).classList.contains(color) && document.getElementById(`a${i+1}/${j}`).classList.contains(color) && document.getElementById(`a${i+2}/${j}`).classList.contains(color) && document.getElementById(`a${i+3}/${j}`).classList.contains(color)){
                    return true;
                }
            }
            //diagonalno
            if(i <= 2 && j <= 3){
                if(document.getElementById(`a${i}/${j}`).classList.contains(color) && document.getElementById(`a${i+1}/${j+1}`).classList.contains(color) && document.getElementById(`a${i+2}/${j+2}`).classList.contains(color) && document.getElementById(`a${i+3}/${j+3}`).classList.contains(color)){
                    return true;
                }
            }
            //diagonalno
            if(i <= 2 && j >= 3){
                if(document.getElementById(`a${i}/${j}`).classList.contains(color) && document.getElementById(`a${i+1}/${j-1}`).classList.contains(color) && document.getElementById(`a${i+2}/${j-2}`).classList.contains(color) && document.getElementById(`a${i+3}/${j-3}`).classList.contains(color)){
                    return true;
                }
            }
        }
    }
}

function clearBoard(){
    for(let i = 0; i <= 5; i++){
        for(let j = 0; j <= 6; j++){
            let polje = document.getElementById(`a${i}/${j}`);
            polje.classList.remove("zuta");
            polje.classList.remove("crvena");
        }
    }
    player = 0;
    turn = 0;
}

function updateScore(player, score){
    if(player == 0){
        document.getElementById("player1Score").innerHTML = score;
    }
    else{
        document.getElementById("player2Score").innerHTML = score;
    }
}

function resetGame(){
    clearBoard();
    updateScore(0, 0);
    updateScore(1, 0);
    document.getElementById("player1").classList.add("active");
    document.getElementById("player2").classList.remove("active");
}

function highlightPlayer(player){
    if(player == 0){
        document.getElementById("player1").classList.add("active");
        document.getElementById("player2").classList.remove("active");
    }
    else{
        document.getElementById("player1").classList.remove("active");
        document.getElementById("player2").classList.add("active");
    }
}

function getPlayerNamesFromStorage(){
    let _names = [];
    if(localStorage.getItem("player1") != null && localStorage.getItem("player2") != null){
        _names[0] = localStorage.getItem("player1");
    }
    else{
        _names[0] = "Zuti";
    }
    if(localStorage.getItem("player2") != null && localStorage.getItem("player2") != ""){
        _names[1] = localStorage.getItem("player2");
    }
    else{
        _names[1] = "Crveni";
    }
    return _names;
}

function setPlayerNames(){
    document.getElementById("player1").innerHTML = names[0] + ": <span id='player1Score'>0</span>";
    document.getElementById("player2").innerHTML = names[1] + ": <span id='player2Score'>0</span>";
}

function UpdatePlayerScore(player) {
    $.ajax({
        url:"update.php",
        type: "post",
        dataType: 'json',
        data: {player: player},
        success:function(result){
            console.log(result);
        }
    });
}