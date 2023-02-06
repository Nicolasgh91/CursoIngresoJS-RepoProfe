/*3.
	Alumno: Nicolás Gabriel Hruszczak
	
    Consigna:
    Para el departamento de Pinturas:
    A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
        con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
    B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit
        (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    let farenHeit_a_centigrados = (temperatura - 32) * 5/9;
    alert(`${temperatura} Fahrenheit son ${farenHeit_a_centigrados.toFixed(2)} Centigrados`)
}

function CentigradosFahrenheit () 
{
	let temperatura = parseFloat(document.getElementById("txtIdTemperatura").value);
    let centigrados_a_farenheit = (temperatura * 9/5) + 32;
    alert(`${temperatura} Centigrados son ${centigrados_a_farenheit.toFixed(2)} Fahrenheit`)

}
