/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	var claveIngresada;
	var contador = 0;

	while (contador < 3)
	{
		claveIngresada = prompt("ingrese el número clave.");

		if (claveIngresada == "utn750")
		{
			alert ("La clave ingresada es la correcta");

			contador = contador + 3;
		}

		contador = contador +1;
		
	}
	
}

//FIN DE LA FUNCIÓN
