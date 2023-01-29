/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	

	let nombre = prompt("Ingrese su nombre: ");

	//selecciono el elemento txtIdNombre del HTML y le asigno como valor el nombre
	//que escribió el usuario.
	document.getElementById("txtIdNombre").value = nombre;

}

