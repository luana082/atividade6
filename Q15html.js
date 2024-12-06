
<html>
<head>
    <script src="/Js/scripts.js"></script>
</head>
<body>
    
</body>
</html>

‎scripts.js

let soma = 0;
while (true) {
    let numero = parseFloat(prompt("imprima um numero (ou um numero negativo para encerrar):"));
    if (numero < 0) {
        break; 
    }
    soma += numero;
}
alert(" soma dos numeros digitados é: " + soma);
