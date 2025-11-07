 class ImpressionismQuiz {
            constructor() {
                this.totalQuestions = 10;
                this.initializeEventListeners();
            }

            initializeEventListeners() {
                document.getElementById('quizForm').addEventListener('submit', (e) => {
                    e.preventDefault();
                    this.checkAnswers();
                });
            }

            checkAnswers() {
                let score = 0;
                
                // Verificar cada pergunta
                for (let i = 1; i <= this.totalQuestions; i++) {
                    const questionName = `q${i}`;
                    const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
                    const questionDiv = document.querySelector(`[data-question="${i}"]`);
                    const explanation = questionDiv.querySelector('.explanation');
                    
                    if (selectedAnswer) {
                        const userAnswer = selectedAnswer.value;
                        const correctAnswer = correctAnswers[questionName];
                        
                        // Mostrar explicação
                        explanation.style.display = 'block';
                        
                        // Marcar resposta como correta ou incorreta
                        this.highlightAnswers(questionDiv, correctAnswer, userAnswer);
                        
                        if (userAnswer === correctAnswer) {
                            score++;
                        }
                    } else {
                        // Se não foi respondida, mostrar explicação mesmo assim
                        explanation.style.display = 'block';
                    }
                }
                
                // Mostrar resultados
                this.showResults(score, this.totalQuestions);
            }

            highlightAnswers(questionDiv, correctAnswer, userAnswer) {
                const labels = questionDiv.querySelectorAll('label');
                labels.forEach(label => {
                    const input = label.querySelector('input');
                    if (input.value === correctAnswer) {
                        label.classList.add('correct');
                    } else if (input.value === userAnswer && userAnswer !== correctAnswer) {
                        label.classList.add('incorrect');
                    }
                });
            }

            showResults(score, total) {
                const resultsDiv = document.getElementById('results');
                const scoreElement = document.getElementById('score');
                const messageElement = document.getElementById('message');
                
                scoreElement.textContent = `${score}/${total}`;
                
                const message = this.getResultMessage(score, total);
                messageElement.textContent = message;
                resultsDiv.style.display = 'block';
                
                // Scroll para os resultados
                resultsDiv.scrollIntoView({ behavior: 'smooth' });
            }

            getResultMessage(score, total) {
                const percentage = (score / total) * 100;
                
                if (percentage === 100) {
                    return '🎉 Parabéns! Você é um verdadeiro conhecedor do Impressionismo!';
                } else if (percentage >= 80) {
                    return '👏 Excelente! Você tem um ótimo conhecimento sobre o Impressionismo!';
                } else if (percentage >= 60) {
                    return '👍 Bom trabalho! Você conhece bem o Impressionismo!';
                } else if (percentage >= 40) {
                    return '📚 Continue estudando! Você está no caminho certo!';
                } else {
                    return '💪 Não desista! O Impressionismo é fascinante e vale a pena aprender mais!';
                }
            }

            restartQuiz() {
                // Limpar todas as respostas
                document.querySelectorAll('input[type="radio"]').forEach(input => {
                    input.checked = false;
                });
                
                // Remover classes de correção
                document.querySelectorAll('label').forEach(label => {
                    label.classList.remove('correct', 'incorrect');
                });
                
                // Esconder explicações
                document.querySelectorAll('.explanation').forEach(explanation => {
                    explanation.style.display = 'none';
                });
                
                // Esconder resultados
                document.getElementById('results').style.display = 'none';
                
                // Scroll para o topo
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Função global para reiniciar o quiz (chamada pelo botão)
        function restartQuiz() {
            quiz.restartQuiz();
        }

        // Inicializar o quiz quando a página carregar
        let quiz;
        document.addEventListener('DOMContentLoaded', function() {
            quiz = new ImpressionismQuiz();
        });

