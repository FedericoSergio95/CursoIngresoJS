function mostrar()
{
//tomo la edad  

var edad;
//Obtener la variable

edad = parseInt(document.getElementById("edad").value);

if(edad >= 13 && edad <= 17){
    alert("Usted es una persona adolescente");
} else {
    alert("Usted no es una persona adolescente")
};



}//FIN DE LA FUNCIÓN