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
    let numero = parseFloat(prompt("imprima o " + i + " numero:"));
   
    if (numero >= 0 && numero <= 100) {
        contador++;
    }
}
alert("total de numeros entre 0 e 100: " + contador);
