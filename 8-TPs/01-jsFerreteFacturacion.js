/*
	Alumno: Nicolás Gabriel Hruszczak
	
    Consigna:
	1. Para el departamento de facturación: 
    A. Ingresar tres precios de productos y mostrar la suma de los mismos. 
    B. Ingresar tres precios de productos y mostrar el promedio de los mismos. 
    C. ingresar tres precios de productos sumarlos y mostrar precio final (más IVA 21%).
*/


let precioUno;
let precioDos;
let precioTres;
let resultado;


function Sumar () 
{
	
precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

resultado = precioUno + precioDos + precioTres;
alert(resultado);

}
function Promedio () 
{
	
precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

resultado = ((precioUno + precioDos + precioTres) / 3).toFixed(2);
alert(resultado);

}
function PrecioFinal () 
{
	
precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

resultado = ((precioUno + precioDos + precioTres) * 1.21).toFixed(2);
alert(resultado);

}