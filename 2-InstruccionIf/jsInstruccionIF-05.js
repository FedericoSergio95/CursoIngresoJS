function mostrar()
{
	var edad;

	edad =txtIdEdad.value;

	edad = parseInt(edad);

	if (edad > 17){

		alert ("Usted no es adolescente");
	}
	else if (edad < 13 ){
		alert ("Usted no es adolescente")
	}
}