let calculadora = {};
            calculadora.display = document.querySelector("#display");

            let botaoUm = document.querySelector("#numeroUm");
            let botaoDois = document.querySelector("#numeroDois");
            let botaoTres = document.querySelector("#numeroTres");
            let botaoQuatro = document.querySelector("#numeroQuatro");
            let botaoCinco = document.querySelector("#numeroCinco");
            let botaoSeis = document.querySelector("#numeroSeis");
            let botaoSete = document.querySelector("#numeroSete");
            let botaoOito = document.querySelector("#numeroOito");
            let botaoNove = document.querySelector("#numeroNove");
            let botaoZero = document.querySelector("#numeroZero");
            let botaoSoma = document.querySelector("#soma");
            let botaoSubtrai = document.querySelector("#subtracao");
            let botaoMultiplica = document.querySelector("#multiplicacao");
            let botaoDivide = document.querySelector("#divisao");
            let botaoIgual = document.querySelector("#igual");
            let botaoApaga = document.querySelector("#apagar");
            let botaoPonto = document.querySelector("#ponto")

            let acumulador = "";
            
            function adicionarNumero(event) {
                calculadora.display.innerText += event.target.innerText;
                acumulador += event.target.innerText;
            }

            botaoUm.onclick = adicionarNumero;
            botaoDois.onclick = adicionarNumero;
            botaoTres.onclick = adicionarNumero;
            botaoQuatro.onclick = adicionarNumero;
            botaoCinco.onclick = adicionarNumero;
            botaoSeis.onclick = adicionarNumero;
            botaoSete.onclick = adicionarNumero;
            botaoOito.onclick = adicionarNumero;
            botaoNove.onclick = adicionarNumero;
            botaoZero.onclick = adicionarNumero;
            botaoPonto.onclick = adicionarNumero;

            botaoSoma.onclick = function() {
                acumulador += " + ";
                calculadora.display.innerText += "+";
            }

            botaoSubtrai.onclick = function() {
                acumulador += " - ";
                calculadora.display.innerText += "-";
            }

            botaoMultiplica.onclick = function() {
                acumulador += " * ";
                calculadora.display.innerText += "×";
            }

            botaoDivide.onclick = function() {
                acumulador += " / ";
                calculadora.display.innerText += "÷";
            }

            botaoApaga.onclick = function() {
                calculadora.display.innerText = "";
                acumulador = "";
            }

            botaoIgual.onclick = function() {
                let resultado = eval(acumulador);
                calculadora.display.innerText = resultado;
                acumulador = resultado;
            }
