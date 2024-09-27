var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucas Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++) {
  console.log(pacientes[i]);

  var tdPeso = pacientes[i].querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[i].querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = pacientes[i].querySelector(".info-imc");

  var pesoEhValido = true;
  var alturaEhValida = true;

  if(peso < 0 || peso > 600) {
    tdImc.textContent = "Peso inválido!";
    pesoEhValido = false;
  }

  if(altura < 0 || altura > 2.80){
    tdImc.textContent = "Altura inválida!"
    alturaEhValida = false;
  }

  if(pesoEhValido && alturaEhValida){
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
  }
}
