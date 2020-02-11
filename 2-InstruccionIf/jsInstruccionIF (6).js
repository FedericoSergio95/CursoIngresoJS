function mostrar()
{
//tomo la edad  
var edad;

//Obtenemos edad y la parseamos
edad = parseInt(document.getElementById("edad").value);

//Evaluacion condicional
if(edad <= 17 && edad >= 13){
    alert("Es adolescente");
} else if (edad < 13){
    alert("Es un niño");
} else if (edad >= 18){
    alert("Es adulto");
}

}//FIN DE LA FUNCIÓN