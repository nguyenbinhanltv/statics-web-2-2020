const inputGame = document.getElementById('input-game-data');
const outputGame = document.getElementById('output-game-data');
const searchGame = document.getElementById('search-game');
const loginAccount = document.getElementById('login-account');

searchGame.onclick = function() {
    if(inputGame) {
        outputGame.innerHTML = inputGame.value;
        inputGame.value = "";
    }
}