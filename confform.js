"use strict";
const prencerformalario = (endereco) =>{
      document.getElementById('cidade').value = endereco.localidade
      document.getElementById(`estado`).value = endereco.uf
      document.getElementById(`bairro`).value = endereco.bairro
    }
const pesquisarcep = async() =>{
    const valor = document.getElementById('cep').value;
    const cep = valor.replace('.', '')
    console.log (cep);
    var url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    prencerformalario(endereco);
  
}

document.getElementById('cep').addEventListener('focusout',pesquisarcep);


