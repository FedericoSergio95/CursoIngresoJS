/* una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20%
cataratas y Cordoba tiene un descuento del 10%
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20%
cataratas y Cordoba tiene un aumento del 10%
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10%
cataratas tiene un aumento del 10%
Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
/
*/

function mostrar()
{
	//Declaro y asigno variables

	var estacionIngresada =txtIdEstacion.value;
	var destinoElegido =txtIdDestino.value;
	var precioBase = 15000;
	var precioFinal;
	var descuento;

	switch (estacionIngresada)
	{
		case "Invierno":
		
			switch (destinoElegido)
			{
				case "Bariloche":

					descuento = 0.2;

					break;

				case "Mar del plata":

					descuento = -0.2;

					break;
			
				default:

					descuento = -0.1;

					break;
			}

			break;
	
		case "Verano":

			switch (destinoElegido)
			{
				case "Bariloche":

					descuento = -0.2;

					break;

				case "Mar del plata":

					descuento = 0.2;

					break;
			
				default:

					descuento = 0.1;

					break;
			}

			break;
		
		default:

			switch (destinoElegido)
			{
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":

					descuento = 0.1;

					break;
			
				default:

					descuento = 0;

					break;
			}

			break;
	}

	precioFinal = precioBase + (precioBase * descuento);

	alert ("El precio final es de "+ precioFinal);

}//FIN DE LA FUNCIÓN