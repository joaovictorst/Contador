
let display = document.getElementById('display-count')

let count = 0;

function reset() {
    count = 0;
    display.innerHTML = count;
}

function some(object) {

    let som = display.innerText
    // o regex mais esse split irá quebrar o que tem dentro
    // do valor desse objeto. por padrão todo valor dentro
    // dele irá vir com um operador no inicio como + e -,
    // então dei um split para separar o valor do operador.
    // o filter foi pois ele estava retornando o indice [0] como vazio,
    // aí esse filter tira esse indice vazio
    let array = object.innerText.split(/([+-])(?=[0-9])+/).filter(Boolean);
    let operation = array[0];
    let number = array[1];
    switch(operation){
        case "+":
            count += parseInt(number);
            display.innerText = count;
        break
        case "-":
            count -= parseInt(number);
            display.innerText = count;
        break
    }
}

function formSome(object) {
    let operator = object.value
    let value = document.getElementById('formValue').value
    value = parseInt(value)
    
    if(operator == "+"){
        count += value
        display.innerText = count;
    }else{
        count -= value
        display.innerText = count;
    }
}
