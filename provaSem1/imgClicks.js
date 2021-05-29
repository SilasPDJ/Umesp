// Utils
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



// Modal with details
const listImgs = document.querySelector("#listImgs")
let imgs = listImgs.querySelectorAll("img")
// Get the modal
let modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

const POKEMONS = {
    "heightMETERS": [0.7, 1.1, 1, 1, 0.7, 3.5, 0.2, 0.8, 0.6],
    "weightKG": [6.9, 19, 22.5, 29.5, 18.5, 65, 0.8, 15, 7.5],
}

const pokeNomes = document.querySelectorAll(".poke__details")


imgs.forEach(function (el, cont) {
    let btn = el
    el.addEventListener('click', function () {
        modal.style.display = "block";
        document.querySelector("#myModal-mainContent").style.background = getRandomColor()
        // modal.style.display = "block";

        let detailsWritten = document.querySelector("#pokemonDetails")

        // detailsWritten.outerHTML = "<p>teste</p>"

        detailsWritten.innerHTML = `<h2 class="text-dark bg-warning">${pokeNomes[cont].textContent} </h2>`
        detailsWritten.innerHTML += `<h3 class="text-white">Altura em metros: ${POKEMONS.heightMETERS[cont]} metros </h3>`
        detailsWritten.innerHTML += `<h3 class="text-white">Peso em quilos: ${POKEMONS.weightKG[cont]}kg </h3>`





    })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}