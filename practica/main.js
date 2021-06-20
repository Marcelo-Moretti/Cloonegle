var ruta = window.location;
document.write("Estas en " + ruta);
console.log("mensaje de consola");
var d = document.getElementById("mycanva");
var lienzo = d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle = "green";
lienzo.moveTo(100, 100);
lienzo.lineTo(200, 200);
lienzo.strokeStyle();
lienzo.closePath();