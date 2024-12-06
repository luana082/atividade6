<html>
<head>
    <script src="/Js/scripts.js"></script>
</head>
<body>
    
</body>
</html>

‎scripts.js

let contador = 0;
for (let i = 1; i <= 20; i++) {
    let numero = parseInt(prompt("digite o " + i + " numero:"));
   
    if (numero % 2 === 0) {
        contador++;
    }
}
alert("total de numeros pares: " + contador);
