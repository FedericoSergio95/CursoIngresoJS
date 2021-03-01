function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	
	switch (destinoIngresado)
	{
		case "Bariloche":

			alert ("El punto cardinal es el Oeste");
			
			break;

		case "Cataratas":

			alert ("El punto cardinal es el Norte");

			break;

		case "Mar del plata":

			alert ("El punto cardinal es el Este");

			break;

		default:

			alert ("El punto cardinal es el Sur");

			break;
	}

}//FIN DE LA FUNCIÓN