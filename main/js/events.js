"use strict";

const send = document.getElementById('send');

const reload = document.getElementById('reload');

const input = document.querySelector('input');

const resultText = document.getElementById('resultText');

const image = document.getElementById('imgpokemon');

const puntaje = document.getElementById('puntaje');

const poke = JSON.parse(jsonData);

const pokemons = poke.map ( p =>
  new Pokemon(p.id, p.name)
);

function agregarEventos() {
  reload.onclick = () => {
    restart();
  }
}

send.onclick = () => {
  input.onchange = () => {
    return imput.value
  }

cantidadEncuestados++

const answer = input.value;
const inputAnswer = answer.toLowerCase();
const pokeName = pokemons[numero]["name"];

if (answer === "" || answer === answer.toUpperCase()){
  alert('Ingrese su respuesta (Solo en minuscula)')  
}

if (inputAnswer === pokeName.toLowerCase()){
  resultText.innerHTML = `That's it! It's ${pokeName}`;
  image.classList.add('success');
  document.querySelector('#skills-description').attributeStyleMap.clear();
  cantidadAcertados++;
  buscarPokemon();
  setTimeout(()=> {restart()}, 10000);
}else{
  resultText.innerHTML = `Oh oh, it is actually ${pokeName}`;
  setTimeout(()=> {restart()}, 2500);
}

sessionStorage.setItem('acertados', cantidadAcertados);
sessionStorage.setItem('encuestados', cantidadEncuestados);
const encuestados = sessionStorage.getItem('encuestados');
const acertados = sessionStorage.getItem('acertados');

puntaje.textContent = `Puntaje ${acertados} de ${encuestados}`;

const scoring = ((acertados / encuestados) < 0.5 ?
puntaje.classList.add('puntajeBajo'):
puntaje.classList.remove('puntajeBajo'));

intentos (encuestados, acertados);


}

const intentos = (tries, guessed)=>{
  if (tries == 5 || guessed == 3){
    setTimeout(()=>{location.reload()}, 10000);
    const result = cantidadAcertados > cantidadEncuestados/2 ? alert('Tenemos a un Shiny por aqui... WINNER!') :
    alert('Ugh, lo sentimos, quizas tengas mejor suerte en otro castillo...LOSER!');
    return result
  }
}

(function cargarPuntaje (){
  alert ('Cuentas con 5 intentos... QUIEN ES ESE POKEMON?!')
})();

const clearSkills = () =>{
  pokeName.innerHTML = "";
  pokeId.innerHTML = "";
  pokeTypes.innerHTML = "";
  pokeStats.innerHTML = "";
}



