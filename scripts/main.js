dinheiroTypes = document.getElementsByClassName('dinheiro');
dinheiro = document.getElementById('dinheiro-span');
let valorBebida = 0, valorTamanho = 0;
const value = document.getElementById('valor-resultante');
const value_led = document.getElementById('value-led');
let precoCafe = 0;
function atualizarValor(valorB, valorT){
    precoCafe = valorB + valorT;
    value.innerHTML = valorB + valorT;
    value_led.innerHTML = valorB + valorT;
}
let dinheiroAtual = 0;
function getDinheiro(quantia){
    dinheiroAtual = parseInt(dinheiro.innerHTML);
    if((50-quantia) >= dinheiroAtual){
        dinheiroAtual += quantia;
        dinheiro.innerHTML = dinheiroAtual;
        visor.innerHTML = dinheiroAtual;
    }else{
        dinheiroAtual = 50;
        dinheiro.innerHTML = 50;
        visor.innerHTML = 50;
        alert("Dinheiro máximo de 50 reais atingido");
    }
}


for (let i = 0; i < dinheiroTypes.length; i++){
    dinheiroTypes[i].addEventListener('click', function(){
        let valorButton = this.innerHTML;
        getDinheiro(parseInt(valorButton), dinheiroTypes[i]);
    });
}

const buttons = document.getElementsByClassName('Sabor');
const displayFlavour = document.getElementById('tipo-selecionado');
const liquid = document.getElementById('liquid')
const colour_coffees = ['#090911', '#A06023', '#BB997E', '#C9C0B1']
const value_coffees = [2, 4, 5, 3];
let flavourChoosed = '';

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let valorButton = this.innerHTML
        displayFlavour.innerHTML = 'Bebida: ' + valorButton;
        flavourChoosed = valorButton;
        liquid.style.backgroundColor = colour_coffees[i];
        valorBebida = value_coffees[i];
        atualizarValor(valorBebida, valorTamanho);
    });
}

const radioButtons = document.getElementsByClassName("radio-button");

let sizes = ['pequeno', 'medio', 'grande'];
let value_coffees_size = [1, 2, 3];
let sizeChoosed = '';

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', function() {
      for (let j = 0; j < radioButtons.length; j++) {
        if (i !== j) {
          radioButtons[j].classList.remove('active');
          liquid.classList.remove(sizes[j]);
          liquid.style.border = "dashed black 3px";
        }
      }
      liquid.classList.toggle(sizes[i]);
      valorTamanho = value_coffees_size[i];
      atualizarValor(valorBebida, valorTamanho);
      sizeChoosed = sizes[i];
      radioButtons[i].classList.toggle('active');
    });
  }

function calculo_troco(valorTotal, valorPago){
  const valores = [50, 20, 10, 5, 2, 1];
  let troco = valorTotal - valorPago;
  const resultado = {};
  if (troco === 0){
    return 0;
  }

  for(let i = 0; i < valores.length; i++){
    const nota = valores[i];
    const quantidadeNotas = Math.floor(troco/nota);
    if (quantidadeNotas > 0){
      resultado[nota] = quantidadeNotas;
      troco -= quantidadeNotas * nota;
    }
  }
  return resultado;

}

function transformarValorInverso(valor) {
  const tabela = [1, 2, 5, 10, 20, 50];
  
  if (valor <= tabela[0]) {
    return 0;
  } else if (valor > tabela[tabela.length - 1]) {
    return tabela.length - 1;
  } else {
    for (let i = 1; i < tabela.length; i++) {
      if (valor > tabela[i-1] && valor <= tabela[i]) {
        return i;
      }
    }
  }
  
  return -1; // Valor inválido ou não encontrado na tabela
}

const resultTable = document.getElementById('result-table');

function generateNotas(resultado){
  for(let nota in  resultado){
    const quantidade = resultado[nota];
    i = transformarValorInverso(nota);
    console.log(i);
    var notaDiv = dinheiroTypes[i];
    const textoDiv = document.createElement('span');
    for (let y = 0; y <quantidade; y++){
      textoDiv.textContent = quantidade + " notas de:";
      resultTable.appendChild(textoDiv);
      resultTable.appendChild(notaDiv);
      console.log(notaDiv);
    }
  }
};
  const barra = document.querySelector('.barra');
  const circulo = document.getElementById('circulo');
  const texto = document.getElementById('texto');
  var tempChoosed = '';
  let barraRetangulo = null;
  
  circulo.addEventListener('mousedown', function (event) {
    event.preventDefault();
    barraRetangulo = barra.getBoundingClientRect();
    document.addEventListener('mousemove', moveCirculo);
    document.addEventListener('mouseup', removeListeners);
  });
  
  function moveCirculo(event) {
    const limiteEsquerda = barraRetangulo.left + circulo.offsetWidth / 2;
    const limiteDireita = barraRetangulo.right - circulo.offsetWidth / 2;
    const novaPosicao = Math.max(limiteEsquerda, Math.min(event.pageX, limiteDireita));
    const porcentagem = ((novaPosicao - limiteEsquerda) / (limiteDireita - limiteEsquerda)) * 100;
    circulo.style.left = porcentagem + '%';
    mudarCor(porcentagem);
    mudarTexto(porcentagem);
  }
  
  function mudarCor(porcentagem) {
    if (porcentagem <= 50) {
      const cor = `rgb(${255 * (porcentagem / 50)}, 255, ${255 - (255 * (porcentagem / 50))})`;
      barra.style.backgroundColor = cor;
    } else {
      const cor = `rgb(255, ${255 - (255 * ((porcentagem - 50) / 50))}, 0)`;
      barra.style.backgroundColor = cor;
    }
  }
  
  function mudarTexto(porcentagem) {
    if (porcentagem <= 25) {
      texto.innerText = 'Frio';
    } else if (porcentagem <= 75) {
      texto.innerText = 'Morno';
    } else {
      texto.innerText = 'Quente';
    }
    tempChoosed = texto.innerText;
  }
  
  function removeListeners() {
    document.removeEventListener('mousemove', moveCirculo);
    document.removeEventListener('mouseup', removeListeners);
  }

const sugarButton = document.getElementById('sugarButton');
var sugarPresence = 'Sem açucar';
sugarButton.addEventListener('click', function(){
  if (sugarPresence === "Sem açucar") {
    sugarPresence = "Com açucar";
  }else{
    sugarPresence = "Sem açucar";
  }
  console.log(sugarPresence);
});

const textBebidaType = document.getElementById('tipoCafe');
const textSize = document.getElementById('tamanhoCafe');
const textSugar = document.getElementById('presencaAcucar');
const textTemperature = document.getElementById('temperaturaCafe');

const prepareButton = document.getElementById('prepareCoffee')


prepareButton.addEventListener('click', function(){
  if (flavourChoosed === ''){
    alert('Escolha o sabor do café');
  }else if (sizeChoosed === ''){
    alert('Escolha o tamanho do café');
  }else if (tempChoosed === ''){
    alert('Escolha a temperatura do café');
  }else if(dinheiroAtual < precoCafe ){
    alert('Saldo insuficiente!');
  }else{
    alert('Café preparado com sucesso');
    resultado = calculo_troco(dinheiroAtual, precoCafe);
    generateNotas(resultado);
    tipoCafe.innerHTML = flavourChoosed;
    textSize.innerHTML = sizeChoosed;
    textSugar.innerHTML = sugarPresence;
    textTemperature.innerHTML = tempChoosed;
    resultTable.style.display = 'flex';
  }
});
