/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
* mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	var edad;
	var estadoCivilPersona;

	edad =txtIdEdad.value;
	estadoCivilPersona = estadoCivil.value;
	edad = parseInt(edad);

		if (edad < 18 && estadoCivilPersona != "Soltero"){

		alert ("Es muy pequeño para NO ser soltero");
		}

}