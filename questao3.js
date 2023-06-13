function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
  
    var fatorial = 1;
    for (var i = 2; i <= numero; i++) {
        fatorial *= i;
    }
  
    return fatorial;
  }
  

    const n = parseInt(prompt("Digite um número:"));  
    while (isNaN(n)) {
        const n = parseInt(prompt("Digite um número:"));
    }

    var fatorialUsuario = calcularFatorial(n);
    alert("O fatorial de " + n + " é: " + fatorialUsuario);

    for (let i = 1; i <= 10; i++) {
        console.log(`O fatorial de ${i} é: ${calcularFatorial(i)}`);
    }