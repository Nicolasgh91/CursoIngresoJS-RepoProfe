/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40% y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas”
     se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
     si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos 
    brutos en informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
    let marcaLamparas = document.getElementById("Marca").value;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    //let precioConDescuento = parseFloat(document.getElementById("txtIdprecioDescuento").value);
    let precioBaselamparas = 35;
    let precioFinal = precioBaselamparas * cantidadLamparas;
    let descuento;
    let ingresosBrutos = precioFinal / 100 * 10;
    
    switch (cantidadLamparas) {
        
        case (cantidadLamparas >= 6 && marcaLamparas === "ArgentinaLuz"):
            descuento = precioFinal / 100 * 50;
            precioFinal -= descuento
            parseFloat(document.getElementById("txtIdprecioDescuento").value) += precioFinal;
            break;
        case cantidadLamparas === 5 && marcaLamparas === "ArgentinaLuz":
            descuento = precioFinal / 100 * 40;
            precioFinal -= descuento;
            alert(precioFinal)
            break;
        case cantidadLamparas === 5 && marcaLamparas != "ArgentinaLuz":
            descuento = precioFinal / 100 * 30;
            precioFinal -= descuento;
            alert(precioFinal)
            break;
        case cantidadLamparas === 4 && marcaLamparas === "ArgentinaLuz" || marcaLamparas === "FelipeLamparas":
            descuento = precioFinal / 100 * 25;
            precioFinal -= descuento;
            alert(precioFinal)
            break;
        case cantidadLamparas === 4 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas":
            descuento = precioFinal / 100 * 20;
            precioFinal -= descuento;
            alert(precioFinal)
            break;
        case cantidadLamparas === 3 && marcaLamparas === "ArgentinaLuz":
            descuento = precioFinal / 100 * 15;
            precioFinal -= descuento;
            alert(precioFinal)
            break;
        case cantidadLamparas === 3 && marcaLamparas === "FelipeLamparas":
            descuento = precioFinal / 100 * 10;
            precioFinal -= descuento;
            alert(precioFinal)
            break;
        case cantidadLamparas === 3 && marcaLamparas != "ArgentinaLuz" || marcaLamparas != "FelipeLamparas": 
            descuento = precioFinal / 100 * 5;
            precioFinal -= descuento;
            break;
        }

        /*
            if(precioFinal > 120){
            precioFinal += ingresosBrutos;
            alert(`Usted pagó ${precioFinal} final, siendo ${ingresosBrutos} el importe de IIBB`);
            }
        */

/*    E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos 
    brutos e informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/
}
