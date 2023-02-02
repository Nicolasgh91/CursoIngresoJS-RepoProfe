/*
Alumno: Nicolás Gabriel Hruszczak

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	// Orden secuencial, preparo dos espacios para almacenar la información
	let numeroUno;
	let numeroDos;
	let resultado;

	// Recibo los datos del usuario y los guardo en los correspondientes espacios
	// que separé para dichos datos
	numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	// recibí dos strings, entonces antes de sumarlas, necesito pasarlas a 
	// numero, una vez realizada la conversión a número puedo hacer la suma
	resultado = numeroUno + numeroDos;
	
	// es importante convierta el texto a número primero (antes que la suma)
	// ya que si sumo primero, estaré sumando dos cadenas de texto y esas
	// despues se podrá convertir a número ya no correra la operación de suma original,
	// sino que van a estar concatenados

	alert(`La suma de los números indicados es: ${resultado}`);

	// dato de color, un string más un number, es un string...
}

