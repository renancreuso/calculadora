var butao2 = document.querySelector(".butao2");

butao2.addEventListener('click', (event)=> {
    event.preventDefault();
    let resultado = document.querySelector("#resultado");
    let form = document.querySelector("#form");
    let num1 = form.valor1.value;
    let num2 = form.valor2.value;

    let sinal = document.querySelector(".operacoes").value;


    switch (sinal) {

        case "Soma":

            resultado.value = parseInt(num1) + parseInt(num2);
            resultado.textContent = resultado.value;

            break;

        case "Subtracao":

            resultado.value = parseInt(num1) - parseInt(num2);
            resultado.textContent = resultado.value;

            break;

        case "Multiplicacao":

            resultado.value = parseInt(num1) * parseInt(num2);
            resultado.textContent = resultado.value;

            break;

        case "Divisao":

            resultado.value = parseFloat(num1) / parseFloat(num2);
            resultado.textContent = resultado.value;

            break;

        default:
            alert("escolha uma operação");

            break;

    }

  

})
