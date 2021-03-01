/*Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
*/

function mostrar()

{
	var numeroIngresado;
	var acumulador = 0;
	var contador = 0;

	while (contador <5)
	{
		
		numeroIngresado = prompt("Ingresar un numero");
		numeroIngresado = parseInt (numeroIngresado);

		acumulador = acumulador + numeroIngresado,
		contador = contador + 1;

	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;

}

//FIN DE LA FUNCIÓN