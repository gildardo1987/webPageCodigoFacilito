function guardarCambios(){
  var sala = document.getElementById("salario").value;
  var nombre = document.getElementById("nombre").value
  document.getElementById("apellido").value= nombre + "_"+ sala;
}
function ValSalario(){
document.getElementById("SalarioSelec").value = document.getElementById("salario").value

}
