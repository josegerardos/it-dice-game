//pedir nombres de dos jugadores
const player1Name = document.getElementById("player1Name") 
const player2Name = document.getElementById("player2Name") 
let player1score = 0;
let player2score = 0;
let player1;
let player2;
//Deberia tomarlos del formulario
//Asignar un nombre al player1 y un nombre al player2
function tomarNombresDeJugadores(evt){
    evt.preventDefault(); //importante porque la pagina se recarga muy rapido para captar datos en el formulario
 player1 = evt.target.elements.player1.value;
 player2 = evt.target.elements.player2.value;

player1Name.innerHTML = player1;
player2Name.innerHTML = player2;

// evt.target.classlist.add('hidden')
document.getElementById('game-container').classList.remove('hidden')
}

function lanzarDados(player, evt){
const dado1 = parseInt(Math.random() * 6) + 1
const dado2 = parseInt(Math.random() * 6) + 1
const resultado = dado1 + dado2;
if(player===1){
player1score = resultado
}else{
    player2score = resultado
}



const dado1HTML = document.getElementById(`p${player}-d1`);
const dado2HTML = document.getElementById(`p${player}-d2`);
dado1HTML.src = `/assets/images/dice-${dado1}.png`
dado2HTML.src = `/assets/images/dice-${dado2}.png`


console.log(dado1, dado2)
const resultadoHTML = document.getElementById(`score${player}`);
resultadoHTML.innerHTML = resultado;
// evt.target.classlist.add("hidden")
evt.target.disabled=true;
if(player1score > 0 && player2score > 0){
    determinarGanador();
}
}
function determinarGanador(){
    if(player1score > player2score){
        document.getElementById('ganador').innerHTML = `El ganador es el ${player1}`
    }else if(player2score > player1score){

        document.getElementById('ganador').innerHTML = `El ganador es el ${player2}`

    }else{
        document.getElementById('ganador').innerHTML = `hubo empate`
    }
}
