/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	var sexoIngresado;
	var contador = 0;

	while (contador < 3)
	{
		sexoIngresado = prompt("ingrese f ó m .");
		
		if (sexoIngresado == "f")
		{
			txtIdSexo.value=sexoIngresado;
			contador = contador + 5;	
		}

		if (sexoIngresado == "m")
		{
			txtIdSexo.value=sexoIngresado;
			contador = contador + 5;
		}
		
		contador = contador +1;
	}	
}

//FIN DE LA FUNCIÓN