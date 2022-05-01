const pokemon_section = document.querySelector('.pokemon-section');

const baseURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;


for(let i=1;i<=898;i++){
 const newIMG =  document.createElement('img');
 newIMG.src = `${baseURL}${i}.png`;
 pokemon_section.appendChild(newIMG);
}