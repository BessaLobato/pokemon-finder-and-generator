const url = "https://pokeapi.co/api/v2/pokemon/"
const btn = document.getElementById("btn")
const resultado = document.getElementById("resultado")

let getPokeData = () => {
   id = document.getElementById("valor").value;
 
        const finalUrl = url + id
        fetch(finalUrl)
           .then((response) => response.json())
           .then((data) => {
               generateCard(data);
            })
   if(id === ""){
    
        let id = Math.floor(Math.random()*150) +1;
        const finalUrl = url + id
        fetch(finalUrl)
           .then((response) => response.json())
           .then((data) => {
               generateCard(data);
            })
    }
}

let generateCard = (data) => {
    console.log(data);
     const imgSrc = data.sprites.front_default;
     const pokeName = data.name;
     document.getElementById('photo').src = imgSrc
     resultado.innerHTML = pokeName
}

btn.addEventListener("click", getPokeData)
window.addEventListener("load", getPokeData)