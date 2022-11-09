// criando uma calculadora
function calculadora() {
    // definindo as operações e pegando valor de entrada do usuário
    const operacao = Number(prompt('Escolha uma opção:  \n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)\n  '))


    // verificando  se a operação é válida 
    if (!operacao || operacao >= 7 ) {
        alert('Erro - Operação Inválida!');
        calculadora();
    } else {
        // definindo variáveis -- todas as entradas devem ser tipo number
        let n1 = Number(prompt('Insira o primeiro valor: '))
        let n2 = Number(prompt('Insira o primeiro valor: '))
        let resultado;
    // verificando se as variáveis são válidas
    if (!n1 || !n2) {
        alert('Erro - Parâmetros Inválidos!');
        calculadora();
    } else {
        // definindo as funções
        function soma() {
            resultado = n1 + n2;
            // mostrando o resultado usando template strings
            alert(`${n1} + ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function subtracao() {
            resultado = n1 - n2;
            // mostrando o resultado usando template strings
            alert(`${n1} - ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            // mostrando o resultado usando template strings
            alert(`${n1} * ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            // mostrando o resultado usando template strings
            alert(`${n1} / ${n2} = ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function divisaoInteira() {
            resultado = n1 % n2;
            // mostrando o resultado usando template strings
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            // mostrando o resultado usando template strings
            alert(`${n1} elevado à ${n2}ª potência é ${resultado}`);
            // dando a opção de chamar uma nova operação
            novaOperacao();
        }
        // nova operação 
        function novaOperacao(){
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
            if (opcao == 1){
                calculadora();
            } else if (opcao == 2){
                alert('Até mais!');
            } else {
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        }
      }
    }
    // escolhendo uma operação 
    // usando if && else
    /*
    if (operacao == 1 ) {
        soma();
    }else if (operacao == 2) {
        subtracao();
    }else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteira();
    } else if (operacao == 6) {
        potenciacao();
    } 
    */

    // usando switch case como alternativa 
    
    switch (operacao) {
        case 1:
            soma();
            break;
        case 2:
            subtracao();
            break;
        case 3:
            multiplicacao();
            break;
        case 4:
            divisaoReal();
            break;
        case 5:
            divisaoInteira();
            break;
        case 6:
            potenciacao();
            break;
    }
    
}
calculadora();