
// Questions and answers for each theme
const questions = {
    'Animaux': [
        { clue: 'Je suis le roi de la savane.', answer: 'Lion' },
        { clue: 'Je vis dans l’eau et j’ai des nageoires.', answer: 'Poisson' }
    ],
    'Histoire': [
        { clue: 'J'ai découvert l'Amérique en 1492.', answer: 'Christophe Colomb' },
        { clue: 'Je suis un empereur français célèbre.', answer: 'Napoléon' }
    ],
    'Cinéma': [
        { clue: 'Je suis un film où un navire coule après avoir heurté un iceberg.', answer: 'Titanic' },
        { clue: 'Je suis un super-héros qui tire des toiles d’araignée.', answer: 'Spider-Man' }
    ],
    'Culture Générale': [
        { clue: 'Je suis la planète la plus proche du soleil.', answer: 'Mercure' },
        { clue: 'Je suis un célèbre monument à Paris.', answer: 'Tour Eiffel' }
    ],
    'Actualité': [
        { clue: 'Je suis l’entreprise qui a lancé l’iPhone.', answer: 'Apple' },
        { clue: 'Je suis un sport où l’on utilise un ballon rond.', answer: 'Football' }
    ]
};

let currentTheme = '';
let currentQuestionIndex = 0;

// Select a theme and start the game
function selectTheme(theme) {
    currentTheme = theme;
    currentQuestionIndex = 0;
    document.getElementById('theme-selection').classList.add('hidden');
    document.getElementById('game-area').classList.remove('hidden');
    document.getElementById('theme-title').textContent = 'Thème: ' + theme;
    showQuestion();
}

// Display the current question
function showQuestion() {
    const question = questions[currentTheme][currentQuestionIndex];
    document.getElementById('clue').textContent = question.clue;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

// Check if the answer is correct
function checkAnswer() {
    const answerInput = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = questions[currentTheme][currentQuestionIndex].answer.toLowerCase();
    if (answerInput === correctAnswer) {
        document.getElementById('feedback').textContent = 'Correct !';
        document.getElementById('feedback').style.color = 'green';
    } else {
        document.getElementById('feedback').textContent = 'Incorrect, la bonne réponse est: ' + questions[currentTheme][currentQuestionIndex].answer;
        document.getElementById('feedback').style.color = 'red';
    }
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTheme].length) {
        showQuestion();
    } else {
        document.getElementById('feedback').textContent = 'Félicitations, tu as terminé toutes les questions de ce thème !';
        document.getElementById('clue').textContent = '';
        document.getElementById('answer').style.display = 'none';
    }
}
