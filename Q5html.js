<html>
<head>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>

let soma = 0;
for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt("Digite o " + i + " numero:"));
  
    soma += numero;
}
alert(" soma dos numeros é: " + soma);
