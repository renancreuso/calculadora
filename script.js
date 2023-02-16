let butao = document.querySelector(".butao");
const resultado = document.querySelector("#resultado");

        
butao.addEventListener('click', (event)=>{
    event.preventDefault();
    
    const form = document.querySelector("#form");
    const num1 = form.valor1.value;
    const num2 = form.valor2.value;
    console.log(num1);
   
        
    const sinal = document.querySelector(".operacoes").value;
        

    if(sinal =="Soma"){
        resultado.value = parseInt(num1) + parseInt(num2);
        resultado.textContent = resultado.value;
        
    }
    else if (sinal=="Subtracao"){
        resultado.value = parseInt(num1) - parseInt(num2);
        resultado.textContent = resultado.value;
    }
    else if(sinal=="Multiplicacao"){
        resultado.value = parseInt(num1) * parseInt(num2);
        resultado.textContent = resultado.value;
    }
    else if(sinal=="Divisao"){
        resultado.value = parseFloat(num1) / parseFloat(num2);
        resultado.textContent = resultado.value;
    }else{
        alert("escolha uma operação");
    }

        
})

const butao3 = document.querySelector(".butao3");
butao3.addEventListener('click', ()=>form.reset());

