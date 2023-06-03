dinheiroTypes = document.getElementsByClassName('dinheiro');
dinheiro = document.getElementById('dinheiro-span');

function getDinheiro(quantia){
    let dinheiroAtual = parseInt(dinheiro.innerHTML);
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

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        let valorButton = this.innerHTML
        displayFlavour.innerHTML = 'Bebida: ' + valorButton;
        liquid.style.backgroundColor = colour_coffees[i];

    });
}

const radioButtons = document.getElementsByClassName("radio-button");

let sizes = ['pequeno', 'medio', 'grande'];

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', function() {
      for (let j = 0; j < radioButtons.length; j++) {
        if (i !== j) {
          radioButtons[j].classList.remove('active');
          liquid.classList.remove(sizes[j]);
        }
      }
      liquid.classList.toggle(sizes[i]);
      radioButtons[i].classList.toggle('active');
    });
  }

  