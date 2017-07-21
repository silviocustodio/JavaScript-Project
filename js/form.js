
        var botaoAdicionar = document.querySelector("#adicionar-paciente");
        botaoAdicionar.addEventListener("click", function (event){
          event.preventDefault();

        var form = document.querySelector("#form-adiciona");

// Extrai informações do paciente no form
        var paciente= obtemPacienteDoForm(form);

        // console.log(paciente);

// Cria tr e td
        // var pacienteTr =   montaTr(paciente);
        // if (!validaPaciente(paciente)) {
        //   console.log("Paciente Inválido");
        //   return;
        // }

// Valida paciente erro


        var erros = validaPaciente(paciente);
        console.log(erros);

        if (erros.length > 0) {
          exibeMensagensDeErro(erros);
          return;
        }

// adicionando paciente na tabela

        // var tabela = document.querySelector("#tabela-pacientes");

        // tabela.appendChild(pacienteTr);

        // console.log(pacienteTr);

// console.log("Clickei em Adicionar");

          adicionaPacienteNaTabela(paciente);

          form.reset();

          var mensagensErro = document.querySelector ("#mensagens-erro");
          mensagensErro.innerHTML = "";
        });

        function adicionaPacienteNaTabela(paciente){

          var pacienteTr =   montaTr(paciente);
          var tabela = document.querySelector("#tabela-pacientes");
          tabela.appendChild(pacienteTr);

        }


        function exibeMensagensDeErro(erros){
          var ul = document.querySelector("#mensagens-erro");
          ul.innerHTML = "";

          erros.forEach(function(erro){
            var li =  document.createElement("li");
            li.textContent = erro;
            ul.appendChild(li);

          });

        }



        function obtemPacienteDoForm(form){

        var paciente = {
          nome: form.nome.value,
          peso: form.peso.value,
          altura: form.altura.value,
          gordura: form.gordura.value,
          imc: calculaImc(form.peso.value, form.altura.value)

        };

        return paciente;
        }

  // Cria tr e td
        function montaTr(paciente){

        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");

        var nomeTd = montaTd(paciente.nome, "info-nome");
        var pesoTd = montaTd(paciente.peso, "info-peso");
        var alturaTd = montaTd(paciente.altura, "info-altura");
        var gorduraTd = montaTd(paciente.gordura, "info-gordura");
        var imcTd = montaTd(paciente.imc, "info-imc");

      // Adicionando paciente na tabela
        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        pacienteTr.appendChild(imcTd);

        return pacienteTr;
      }

      function montaTd(dado, classe){

        var td = document.createElement("td");
        td.textContent = dado;
        td.classList.add(classe);

        return td;

      }

      function validaPaciente(paciente){


        var erros = [];

        if (paciente.nome.length === 0 ) {
          erros.push("O nome não pode estar em branco");

        }


        if(!validaPeso(paciente.peso)){
          erros.push("Peso Inválido");
        }

        if (!validaAltura(paciente.altura)) {
          erros.push("Altura é inválida!");

        }


        if (paciente.gordura.length === 0) {
          erros.push("A gordura não pode estar em branco");

        }

        if (paciente.peso.length === 0) {
          erros.push("O peso não pode estar em branco");

        }

        if (paciente.altura.length === 0) {
          erros.push("A altura não pode estar em branco");

        }

        return erros;

      }


      // function obtemPacienteDoForm(form){
      //
      //   var paciente = {
      //     nome: form.nome.value,
      //     peso: form.peso.value,
      //     altura: form.altura.value,
      //     gordura: form.gordura.value
      //   }
      //  return paciente;
      //
      // }
