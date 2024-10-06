// Define levels, study points, and questions
const levels = [
    {
        title: "Level 7:Exoplanet Surveys and Missions",
        studyPoints: [
            "NASA's Kepler mission has discovered thousands of exoplanets.",
            "The Transiting Exoplanet Survey Satellite (TESS) is designed to find exoplanets around bigstart. ",
            "The European Space Agency's CHEOPS mission focuses on characterizing known exoplanets.",
            "Ground-based telescopes also play a crucial role in exoplanet discovery.",
            "Future missions aim to directly image exoplanets and study their atmospheres.",

        ],
        questions: [
            {
            question: "What has NASA's Kepler mission accomplished?",
            options: ["Discovered comets", "Discovered thousands of exoplanets", "Measured the distance to stars", "Studied black holes"],
            answer: 1
            },
            {
            question: "What is the purpose of TESS?",
            options: ["To find exoplanets around dim stars", "To study solar system planets", "To find exoplanets around bright stars", "To measure star brightness"],
            answer: 2
            },
            {
            question: "What does the CHEOPS mission focus on?",
            options: ["Discovering new stars", "Characterizing known exoplanets", "Observing black holes", "Mapping the Milky Way"],
            answer: 1
            },
            {
            question: "Which type of telescopes contribute to exoplanet discovery?",
            options: ["Only space telescopes", "Only radio telescopes", "Ground-based telescopes", "Only optical telescopes"],
            answer: 2
            },
            {
            question: "What is a future goal of exoplanet missions?",
            options: ["To destroy asteroids", "To directly image exoplanets", "To study the Sun", "To find new stars"],
            answer: 1
            }
            ]
        
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}