/*4.
	Alumno: Nicolás Gabriel Hruszczak
	
    Consigna:
    Para el departamento de iluminación:
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
    let precioBaselamparas = 35;
    let marcaLamparas = document.getElementById("Marca").value;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let precioFinal = precioBaselamparas * cantidadLamparas;
    let descuento;
    let ingresosBrutos = precioFinal / 100 * 10;
    
    switch (cantidadLamparas) {
        case 5:
                if (marcaLamparas === "ArgentinaLuz") {
                    descuento = precioFinal / 100 * 40;
                    precioFinal -= descuento;
                    alert(precioFinal);
                } else {
                    descuento = precioFinal / 100 * 30;
                    precioFinal -= descuento;
                    if(precioFinal > 120){
                        precioFinal += ingresosBrutos;
                        alert(`Usted pagó ${precioFinal} final, siendo ${ingresosBrutos} el importe de IIBB`);
                    } else{
                        alert(precioFinal);    
                    }
                }
            break;
        case 4:
            if (marcaLamparas === "ArgentinaLuz" || marcaLamparas === "FelipeLamparas") {
                descuento = precioFinal / 100 * 25;
                precioFinal -= descuento;
                alert(precioFinal);
            } else {
                descuento = precioFinal / 100 * 20;
                precioFinal -= descuento;
                alert(precioFinal);
            }
            break;
        case 3:
            if (marcaLamparas === "ArgentinaLuz") {
                descuento = precioFinal / 100 * 15;
                precioFinal -= descuento;
                alert(precioFinal);
            } else if (marcaLamparas === "FelipeLamparas"){
                descuento = precioFinal / 100 * 10;
                precioFinal -= descuento;
                alert(precioFinal);
            } else {
                descuento = precioFinal / 100 * 5;
                precioFinal -= descuento;
                alert(precioFinal);    
            }
            break;
        case 2:
                alert(precioFinal);    
            break;
        case 1:
                alert(precioFinal);    
            break;
        default:
            if (cantidadLamparas >= 6) {
                descuento = precioFinal / 100 * 50;
                precioFinal -= descuento;
                if(precioFinal > 120){
                    precioFinal += ingresosBrutos;
                    alert(`Usted pagó ${precioFinal} final, siendo ${ingresosBrutos} el importe de IIBB`);
                } else{
                    alert(precioFinal);    
                }
            } else {
                alert("Compre al menos una lamparita, dale");
            }
            break;
        }
}