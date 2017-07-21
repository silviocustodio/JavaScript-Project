  var titulo = document.querySelector("#tituloTopo");
  tituloTopo.textContent = "Controle de Pacientes - IMC";

  var  pacientes = document.querySelectorAll(".paciente");


  for (var i = 0; i < pacientes.length; i++) {
    var trPaciente = pacientes[i];


    var nome= trPaciente.querySelector(".info-nome").textContent;
    var peso = trPaciente.querySelector(".info-peso").textContent;
    var altura= trPaciente.querySelector(".info-altura").textContent;

    var tdImc = trPaciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);


    if (!pesoValido) {
      console.log("Peso inválido");
      pesoValido =  false;
        tdImc.textContent = "Peso Inválido";
        trPaciente.classList.add("paciente-invalido") ;

    }

    if (!alturaValida) {
      console.log("Altura inválida");
      alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        trPaciente.classList.add("paciente-invalido") ;

    }

    if (pesoValido && alturaValida) {
      var imc = calculaImc(peso,altura);
      tdImc.textContent = imc;
    }
  }


    function calculaImc(peso,altura){
      var imc = 0;
      imc = peso / (altura*altura);

      return  imc.toFixed(2);
    }

    // Valida Peso
    function validaPeso(peso){
      if (peso >=0 && peso < 300) {
        return true;
      }else {
        return false;
      }

    }

    // Valida Altura
    function validaAltura(altura){
      if (altura>=0 && altura < 2.50) {
        return true;
      }else {
        return false;
      }

    }


    // console.log("Nome: " + nome);
    // console.log("Peso: " + peso);
    // console.log("Altura: " + altura);
    // console.log("IMC: " + imc.toFixed(2));
    // console.log("========================================");



  // titulo.addEventListener("click", function () {
  //   console.log("clicado direto anonima");
  //
  // });
