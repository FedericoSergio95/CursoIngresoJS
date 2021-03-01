/* al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
*/

function mostrar()
{
	var repeticiones;
	var i;

	repeticiones = prompt ("Cuantas veces desea repetir el mensaje Hola UTN FRA?");
	repeticiones = parseInt (repeticiones);

	for (i = 0; i < repeticiones; i++)
	{
		alert ("Hola UTN FRA");
		
	}


}

//FIN DE LA FUNCIÓN