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
            
            botaoUm.onclick = function() {
                calculadora.display.innerText += 1;
            }

            botaoDois.onclick = function() {
                calculadora.display.innerText += 2;
            }

            botaoTres.onclick = function() {
                calculadora.display.innerText += 3;
            }

            botaoQuatro.onclick = function() {
                calculadora.display.innerText += 4;
            }

            botaoCinco.onclick = function() {
                calculadora.display.innerText += 5;
            }

            botaoSeis.onclick = function() {
                calculadora.display.innerText += 6;
            }

            botaoSete.onclick = function() {
                calculadora.display.innerText += 7;
            }

            botaoOito.onclick = function() {
                calculadora.display.innerText += 8;
            }

            botaoNove.onclick = function() {
                calculadora.display.innerText += 9;
            }

            botaoZero.onclick = function() {
                calculadora.display.innerText += 0;
            }

            botaoSoma.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " + ";
                calculadora.display.innerText = "";
            }

            botaoSubtrai.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " - ";
                calculadora.display.innerText = "";
            }

            botaoMultiplica.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " * ";
                calculadora.display.innerText = "";
            }

            botaoDivide.onclick = function() {
                acumulador += calculadora.display.innerText;
                acumulador += " / ";
                calculadora.display.innerText = "";
            }

            botaoApaga.onclick = function() {
                calculadora.display.innerText = "";
                acumulador = "";
            }

            botaoPonto.onclick = function() {
                calculadora.display.innerText = ".";
            }

            botaoIgual.onclick = function() {
                //TODO: checar se existe conteúdo dentro do display

                //colocando conteúdo do display no acumulador
                acumulador += calculadora.display.innerText;
                //resolvendo conta (conteúdo acumulador)
                let resultado = eval(acumulador);
                //colocando no display o conteúdo do acumulador
                calculadora.display.innerText = resultado;
                // limpando o acumulador
                acumulador = "";

            }
