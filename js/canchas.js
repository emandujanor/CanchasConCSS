//alert("aqui toy");
var botonFutbol= document.getElementById('futbol');
var botonBasket= document.getElementById('basket');
var botonTenis= document.getElementById('tenis');
var canchas=document.getElementsByClassName('fondo');
botonFutbol.addEventListener("click", mostrarFutbol);
botonBasket.addEventListener("click", mostrarBascket);
botonTenis.addEventListener("click", mostrarTenis);


function mostrarFutbol(){
  canchas[0].style.display="block";
  canchas[1].style.display="none";
  canchas[2].style.display="none";

}
function mostrarBascket(){
  canchas[1].style.display="block";
  canchas[0].style.display="none";
  canchas[2].style.display="none";
}
function mostrarTenis(){
  canchas[1].style.display="none";
  canchas[0].style.display="none";
  canchas[2].style.display="block";
}
