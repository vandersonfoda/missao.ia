const perguntas = [
    {
        enunciado: "Assim que saiu da escola, você se depara com uma nova tecnologia: um chat que consegue responder a todas as dúvidas que uma pessoa pode ter. Além disso, o chat também gera imagens e áudios hiper-realistas. Qual o seu primeiro pensamento?",
        alternativas: [
            { texto: "Isso é assustador!", afirmacao: "Você teme o avanço tecnológico." },
                        { texto: "Isso é maravilhoso!", afirmacao: "Você está animado com as novas possibilidades." }
                    ]
                }
            ];
            
            let atual = 0;
            function mostraPergunta() {
                const perguntaAtual = perguntas[atual];
                const caixaPerguntas = document.querySelector('.caixa-perguntas');
                caixaPerguntas.textContent = perguntaAtual.enunciado;
                mostraAlternativas(perguntaAtual.alternativas);
            }
           function mostraAlternativas(alternativas) {
               const caixaAlternativas = document.querySelector('.caixa-alternativas');
               caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores
           alternativas.forEach(alternativa => {
                   const botaoAlternativa = document.createElement('button');
                   botaoAlternativa.textContent = alternativa.texto;
                   botaoAlternativa.onclick = () => mostraResultado(alternativa.afirmacao);
                   caixaAlternativas.appendChild(botaoAlternativa);
               });
           }
            function mostraResultado(afirmacao) {
                const caixaResultado = document.querySelector('.caixa-resultado .texto-resultado');
                caixaResultado.textContent = afirmacao;
            }
            
            // Inicializa a primeira pergunta
            mostraPergunta();