<html>
<head>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>

‎scripts.js

let somaidades = 0;
for (let i = 1; i <= 20; i++) {
    let idade = parseInt(prompt(imforme a idade da ' + i + ' pessoa:'));
    
    somaidades += idade;
}
alert(' soma das idades é: ' + somaidades);
