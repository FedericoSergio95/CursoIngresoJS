function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad = parseInt(document.getElementById("edad").value);
estadoCivil = document.getElementById("estadoCivil").value;

if (edad <= 17 && estadoCivil != "Soltero"){
    alert("Es muy pequeño para NO estar soltero");
}
	


}//FIN DE LA FUNCIÓN