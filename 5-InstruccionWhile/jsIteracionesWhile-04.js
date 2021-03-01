/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	var numeroIngresado;
	var contador=1;

	while (contador < 4)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
		
		if (numeroIngresado <10)
		{
			txtIdNumero.value = numeroIngresado;
			contador = contador + 5;	
		}
		
		contador = contador +1;
	}	
}

//FIN DE LA FUNCIÓN