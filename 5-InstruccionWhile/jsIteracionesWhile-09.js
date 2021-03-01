/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{
	do
	{
		var numeroIngresado;
		var numeroMaximo;
		var numeroMinimo;
		var continuar;

		numeroIngresado = prompt ("ingrese un numero");
		numeroIngresado = parseInt (numeroIngresado);
		numeroMaximo = parseInt (numeroMaximo);
		numeroMinimo = parseInt (numeroMinimo);

			if (numeroIngresado > numeroMaximo)
			{
				
				numeroMaximo = numeroIngresado;
				
			}
			else if (numeroIngresado < numeroMinimo)
			{
				
				numeroMinimo = numeroIngresado;
				
			}
		
			continuar = confirm("Desea continuar?");

	} while (continuar==true);
		
	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
	


}

//FIN DE LA FUNCIÓN