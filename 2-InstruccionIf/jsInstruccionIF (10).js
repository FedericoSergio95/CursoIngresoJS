function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = Math.floor(Math.random() * 11);
	if(random<4){
		alert("Vamos, la proxima se puede");
	} else if(random>=4&&random<9){
		alert("APROBÓ");
	} else if(random>=9){
		alert("EXCELENTE");
	}
}//FIN DE LA FUNCIÓN