
const sqAreaInputResult = document.getElementById("resultSquareArea");
let sqAreaInputText = document.getElementById('squareAreaInputText');
const sqAreaBtn = document.getElementById("sqAreaBtn");

const letters = /[a-zA-Z]/


function toConfirmData(inputId)
{

    let confirmed = false;
    let value = inputId.value
    if(containsLetters(value))
    {
        alert('No se permiten letras');
        
        
    }

    else if(value == '')
    {
        alert('Tienes que ingresar algo');
        
        
    }
    else
    {
        confirmed = true;   
        
    }

    return confirmed
}


function containsLetters(str) {
    return /[a-zA-Z]/.test(str);
  }

  let operaciones = {
    areaCuadrado: function(lado)
    {
        return areaCuadrado = lado * lado;
        
    },

    perimetroCuadrado: function(lado)
    {
       return perimetro = lado * 4;
    },


    diagonalCuadrado: function(lado)
    {
        return lado * Math.sqrt(2)
    },
    areaTriangulo: function(base, altura)
    {
        let areaTriangulo = (base * altura) / 2;
        console.log(`El area del triangulo es igual a: ${areaTriangulo}cm`);
    },

    perimetroTriangulo: function(lado, lado, lado)
    {
        let perimetroTriangulo = lado + lado + lado;
        console.log(`El perimetro del triangulo es igual a: ${perimetroTriangulo}cm`);
    },
    diametroCirculo: function(radio)
    {
        const diametro = radio * 2;
        console.log(`El diametro del circulo es igual a: ${diametro}cm`)

    },
    circunferenciaCirculo: function(diametro)
    {
        let circunferencia = diametro * Math.PI;
        console.log(`La circunferencia del circulo es igual a: ${circunferencia.toFixed(2)}cm`)
    },
    areaCirculo: function(radio)
    {
        return Math.pow(radio, 2) * Math.PI;
        
    }
}

  sqAreaBtn.addEventListener('click', () => {
    if(toConfirmData(sqAreaInputText))
    {
        const result = operaciones.areaCuadrado(sqAreaInputText.value)

        sqAreaInputResult.innerHTML = result + "cm";
    }
})

 sqPerBtn.addEventListener('click', () => {
   if(toConfirmData(sqPer1stPar))
   {
       const result = operaciones.perimetroCuadrado(sqPer1stPar.value);
       sqPerInputResult.innerHTML = `${result} cm`
   }
 })
 
sqDiagonalBtn.addEventListener('click', () => {
    if(toConfirmData(sqDiagonalInputValue))
    {
        const result = operaciones.diagonalCuadrado(sqDiagonalInputValue.value).toFixed(2);
        sqDiagonalInputResult.innerHTML = `${result} cm`
    }
})

crclAreaBtn.addEventListener('click', () => {
    if(toConfirmData(crclAreaInputValue))
    {
       const result = operaciones.areaCirculo(crclAreaInputValue.value).toFixed(2);
       crclAreaInputResult.innerHTML = `${result} cm2`
    }
})
