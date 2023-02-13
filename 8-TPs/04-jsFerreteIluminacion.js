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

function CalcularPrecio() 
{
    let precioBaselamparas = 35;
    let marcaLamparas = document.getElementById("Marca").value;
    let cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    let precioFinal = precioBaselamparas * cantidadLamparas; let porcentaje = 0;
    let descuento = 0;
    let ingresosBrutos = precioFinal / 100 * 10;

    if (cantidadLamparas != 0 && cantidadLamparas != null) 
    {

        if (cantidadLamparas >= 6) 
        {
            porcentaje = 50;
        }

        if (cantidadLamparas == 5) 
        {
            porcentaje = 30;
            if (marcaLamparas === "ArgentinaLuz") 
            {
                porcentaje = 40;
            } 
        }

        if (cantidadLamparas == 4) 
        {
            porcentaje = 20;
            if (marcaLamparas === "ArgentinaLuz" || marcaLamparas === "FelipeLamparas") 
            {
                porcentaje = 25;
            } 
        }

        if (cantidadLamparas == 3) 
        {

            porcentaje = 5;

            if (marcaLamparas === "ArgentinaLuz") 
            {
                porcentaje = 15;
            }
            if (marcaLamparas === "FelipeLamparas")
            {
                porcentaje = 10;
            }
        }

    }
    descuento = precioFinal * porcentaje / 100;
    txtIdprecioDescuento.value = precioFinal - descuento;

    if (precioFinal - descuento > 120) 
    {
        precioFinal += ingresosBrutos;
        txtIdprecioDescuento.value = precioFinal;
        alert(`Usted pagó ${precioFinal} final, siendo ${ingresosBrutos} el importe de IIBB`);
    }
}