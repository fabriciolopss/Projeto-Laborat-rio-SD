nota1 = document.getElementById('nota1');
nota2 = document.getElementById('nota2');
nota5 = document.getElementById('nota5');
nota10 = document.getElementById('nota10');
nota20= document.getElementById('nota20');
nota50 = document.getElementById('nota50');
dinheiro = document.getElementById('dinheiro-span');
visor = document.getElementById('visor');

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


nota1.addEventListener('click', function(){
    getDinheiro(1);
    
});

nota2.addEventListener('click', function(){
    getDinheiro(2);
    
});

nota5.addEventListener('click', function(){
    getDinheiro(5);
    
});

nota10.addEventListener('click', function(){
    getDinheiro(10);
    
});

nota20.addEventListener('click', function(){
    getDinheiro(20);
    
});

nota50.addEventListener('click', function(){
    getDinheiro(50);
    
});
