/* al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado,
y mostrar la cantidad de numeros pares encontrados.
*/

function mostrar()
{
	var i;
	var numeroIngresado;
	var cantidadNumerosPares;
	

	numeroIngresado = prompt ("Ingrese un numero");

	numeroIngresado = parseInt (numeroIngresado);

	for (i = 2; i < numeroIngresado; i = i +2)
	{
		alert (i);
		
	}

	cantidadNumerosPares = (numeroIngresado/2) -1;
	cantidadNumerosPares = Math.round(cantidadNumerosPares)
	
	alert ("La cantidad de numeros pares encontrados es de "+cantidadNumerosPares);

}

//FIN DE LA FUNCIÓN