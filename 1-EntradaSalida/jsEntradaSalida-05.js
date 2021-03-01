/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaracion
	var nombre;
	var edad;

	//asignacion
	nombre = txtIdNombre.value;
	edad = txtIdEdad.value;

	//mostrar
	alert("Su nombre es "+ nombre + " y tiene " + edad + " años de edad");
}

