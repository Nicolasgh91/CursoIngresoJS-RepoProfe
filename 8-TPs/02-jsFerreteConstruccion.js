/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar si se ingresara el largo
    y el ancho de un terreno rectangular y se debe alambrar con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
     y se debe alambrar con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
     debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

let largoTerreno;
let anchoTerreno;
let radioTerreno;
let resultado;

function Rectangulo () 
{
    largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);
    resultado = (largoTerreno * 2 + anchoTerreno * 2) * 3;
    alert(resultado.toFixed(2));
}
function Circulo () 
{
	largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);
    resultado = 2 * radioTerreno * Math.PI * 3;

    alert(resultado.toFixed(2));

}
function Materiales () 
{
	largoTerreno = parseFloat(document.getElementById("txtIdLargo").value);
    anchoTerreno = parseFloat(document.getElementById("txtIdAncho").value);
    radioTerreno = parseFloat(document.getElementById("txtIdRadio").value);
    
    let area = largoTerreno * anchoTerreno;
    const CEMENTO_X_METRO = area * 2; 
    const CAL_X_METRO = area * 3;

    alert(`Para los ${area}m2 se van a necesitar ${CEMENTO_X_METRO} bolsas de cemento y ${CAL_X_METRO} bolsas de cal`)
}