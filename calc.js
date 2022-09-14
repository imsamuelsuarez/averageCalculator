const cards = [{
    name: "squareArea",
    result: document.getElementsByClassName("fst-p--result"),
    btn: document.getElementById("fst-button--submit"),
    inputText: document.getElementById("fst-card--input-text"),
    
}]


let operaciones = {
    areaCuadrado: function(lado)
    {
        let areaCuadrado = lado * lado;
        alert(`El area del cuadrado es igual a ${areaCuadrado}cm`);
    },

    perimetroCuadrado: function(lado)
    {
        let perimetroCuadrado = lado * 4;
        alert(`El perimetro del cuadrado es igual a ${perimetroCuadrado}cm²`)
    },

    areaTriangulo: function(base, area)
    {
        let areaTriangulo = (base * area) / 2;
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
        let areaCirculo = Math.pow(radio, 2) * Math.PI;
        console.log(`El area del circulo es igual a: ${areaCirculo.toFixed(2)}cm`)
    }
}