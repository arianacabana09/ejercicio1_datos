function mostrar(){
  var nom=document.getElementById("nombre");
  var apell=document.getElementById("apellido");
  var id=document.getElementById("dni");
  var direc=document.getElementById("direccion");

var dato = "<li> Nombre: "+nombre.value+"<br>"+
"<li> Apellido:" +apellido.value+"<br>"+
"<li> DNI: "+dni.value+"<br>"+
"<li> Direccion:" +direccion.value+"<br>";

document.getElementById("datos").innerHTML= dato;
}
