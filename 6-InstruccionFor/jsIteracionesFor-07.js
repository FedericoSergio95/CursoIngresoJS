/* al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado,
y mostrar la cantidad de numeros divisores encontrados.
*/

function mostrar()
{
	var i;
	var numeroIngresado;
	var contadorDivisores=0;

	numeroIngresado = prompt ("Ingrese un numero");

	numeroIngresado = parseInt (numeroIngresado);

	for (i= 1; i <= numeroIngresado; i = i +1)
	{
		if (numeroIngresado % i == 0)
		{
			alert (i);
			contadorDivisores++;
		}
		
	}
		alert("La cantidad de divisores es de "+contadorDivisores);
}

//FIN DE LA FUNCIÓN