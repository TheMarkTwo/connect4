var player = 0;
var turn = 0;
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

            if(checkWin("zuta")){
                alert("Zuti je pobijedio!");
                clearBoard()
                updateScore(0, parseInt(document.getElementById("player1Score").innerHTML) + 1);
            }
            else if(checkWin("crvena")){
                alert("Crveni je pobijedio!");
                clearBoard()
                updateScore(1, parseInt(document.getElementById("player2Score").innerHTML) + 1);
            }
            else{
                turn++;
                console.log(turn);
                if(turn == 42){
                    alert("Nerijeseno!");
                    clearBoard()
                }
            }
            break;
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

function checkWin(boja){
    for(let i = 0; i <= 5; i++){
        for(let j = 0; j <= 6; j++){
            //horizontalno
            if(j <= 3){ 
                if(document.getElementById(`a${i}/${j}`).classList.contains(boja) && document.getElementById(`a${i}/${j+1}`).classList.contains(boja) && document.getElementById(`a${i}/${j+2}`).classList.contains(boja) && document.getElementById(`a${i}/${j+3}`).classList.contains(boja)){
                    return true;
                }
            }
            //vertikalno
            if(i <= 2){
                if(document.getElementById(`a${i}/${j}`).classList.contains(boja) && document.getElementById(`a${i+1}/${j}`).classList.contains(boja) && document.getElementById(`a${i+2}/${j}`).classList.contains(boja) && document.getElementById(`a${i+3}/${j}`).classList.contains(boja)){
                    return true;
                }
            }
            //diagonalno
            if(i <= 2 && j <= 3){
                if(document.getElementById(`a${i}/${j}`).classList.contains(boja) && document.getElementById(`a${i+1}/${j+1}`).classList.contains(boja) && document.getElementById(`a${i+2}/${j+2}`).classList.contains(boja) && document.getElementById(`a${i+3}/${j+3}`).classList.contains(boja)){
                    return true;
                }
            }
            //diagonalno
            if(i <= 2 && j >= 3){
                if(document.getElementById(`a${i}/${j}`).classList.contains(boja) && document.getElementById(`a${i+1}/${j-1}`).classList.contains(boja) && document.getElementById(`a${i+2}/${j-2}`).classList.contains(boja) && document.getElementById(`a${i+3}/${j-3}`).classList.contains(boja)){
                    return true;
                }
            }
        }
    }
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
}