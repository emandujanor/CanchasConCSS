//alert("aqui toy");
var botonFutbol= document.getElementById('futbol');
var botonBasket= document.getElementById('basket');
var canchas=document.getElementsByClassName('fondo');
botonFutbol.addEventListener("click", mostrarFutbol);
botonBasket.addEventListener("click", mostrarBascket);

function mostrarFutbol(){

  canchas[0].style.display="block";
  canchas[1].style.display="none";

}
function mostrarBascket(){

  canchas[1].style.display="block";
  canchas[0].style.display="none";

}
