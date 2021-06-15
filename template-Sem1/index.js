const prefix = "/produtos/"
let link_prefix = [".html"][0]
const links = ["domestico" + link_prefix, "moda" + link_prefix, "variados" + link_prefix]
let compras = document.querySelector("#comprasSorted")
compras.setAttribute("href", prefix + links[Math.floor(Math.random() * links.length)])
// Randomiza página de produtos