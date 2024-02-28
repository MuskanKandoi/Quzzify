document.addEventListener("DOMContentLoaded", function () {
    const quizQuestionsDiv = document.getElementById("quizQuestions");
    const nextQuestionBtn = document.getElementById("nextQuestionBtn");
    const prevQuestionBtn = document.getElementById("prevQuestionBtn");
    const submitBtn = document.getElementById("submitBtn");
    const quizResultsDiv = document.getElementById("quizResults");
    const scoreDiv = document.getElementById("score");
    const timerElement = document.getElementById("timer");

    // Create a new container for correct answers
    const correctAnswersDiv = document.createElement("div");
    correctAnswersDiv.id = "correctAnswers";
    document.body.appendChild(correctAnswersDiv);

    let currentQuestionIndex = 0;
    let timeLeft = 1 * 60; // 1 minute for testing purposes

    // Mock quiz data
    const quizData = {
        questions: [
            {
                question: "What is 2 + 2?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 1 // Index of the correct answer in the options array
            },
            {
                question: "What is 3 + 3?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 1
            },
            {
                question: "What is 4 + 4?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 3
            },
            {
                question: "What is 1 + 1?",
                options: ["2", "6", "7", "8"],
                correctAnswer: 0
            },
            {
                question: "What is 5 + 5?",
                options: ["5", "6", "7", "10"],
                correctAnswer: 3
            }
        ]
    };

    // Function to display the current question
    function displayCurrentQuestion() {
        const question = quizData.questions[currentQuestionIndex];
        let questionHtml = `<div class="question" style="color: white;">${currentQuestionIndex + 1}. ${question.question}</div>`;
        question.options.forEach((option, index) => {
            questionHtml += `<input type="radio" name="question" value="${index}" style="color: white;"> ${option}<br>`;
        });
        quizQuestionsDiv.innerHTML = questionHtml;

        // Show or hide Previous Question, Next Question, and Submit buttons based on the current question index
        prevQuestionBtn.style.display = currentQuestionIndex === 0 ? "none" : "block";
        nextQuestionBtn.style.display = currentQuestionIndex === quizData.questions.length - 1 ? "none" : "block";
        submitBtn.style.display = currentQuestionIndex === quizData.questions.length - 1 ? "block" : "none";
    }

    // Event listener for moving to the next question
    nextQuestionBtn.addEventListener("click", function () {
        // Automatically submit the question
        submitQuestion();

        // Move to the next question
        currentQuestionIndex++;

        // If all questions are answered, show the results
        if (currentQuestionIndex === quizData.questions.length) {
            const score = calculateScore();
            scoreDiv.textContent = `Your score: ${score}/${quizData.questions.length}`;
            quizResultsDiv.style.display = "block";
            correctAnswersDiv.style.display = "block"; // Display the container for correct answers
            // Hide quiz questions
            quizQuestionsDiv.style.display = "none";
            // Hide timer
            timerElement.style.display = "none";
            // Hide Next Question and Previous Question buttons
            nextQuestionBtn.style.display = "none";
            prevQuestionBtn.style.display = "none";
            submitBtn.style.display = "none";
            // Show Submit button
            submitBtn.style.display = "block";

            // Display correct answers
            displayCorrectAnswers();
        } else {
            // Display the next question
            displayCurrentQuestion();
        }
    });

    // Event listener for moving to the previous question
    prevQuestionBtn.addEventListener("click", function () {
        // Move to the previous question
        currentQuestionIndex--;

        // Display the previous question
        displayCurrentQuestion();
    });

    // Event listener for selecting an answer
    quizQuestionsDiv.addEventListener("change", function (event) {
        const selectedOptionIndex = event.target.value;
        if (selectedOptionIndex !== undefined) {
            // Do not automatically move to the next question when an answer is selected
        }
    });

    // Event listener for submitting the quiz
    submitBtn.addEventListener("click", function () {
        const score = calculateScore();
        scoreDiv.textContent = `Your score: ${score}/${quizData.questions.length}`;
        quizResultsDiv.style.display = "block";
        correctAnswersDiv.style.display = "block"; // Display the container for correct answers
        // Hide quiz questions
        quizQuestionsDiv.style.display = "none";
        // Hide timer
        timerElement.style.display = "none";
        // Hide Next Question, Previous Question, and Submit buttons
        nextQuestionBtn.style.display = "none";
        prevQuestionBtn.style.display = "none";
        submitBtn.style.display = "none";

        // Display correct answers
        displayCorrectAnswers();
    });

    // Function to submit the current question
    function submitQuestion() {
        const selectedOptionIndex = parseInt(document.querySelector('input[name="question"]:checked').value);
        // Add logic here to handle the submitted answer, if needed
    }

    // Function to calculate the quiz score
    function calculateScore() {
        let score = 0;
        quizData.questions.forEach((question, index) => {
            const selectedOptionIndex = parseInt(document.querySelector(`input[name="question"]:checked`).value);
            if (selectedOptionIndex !== undefined && selectedOptionIndex === question.correctAnswer) {
                score++;
            }
        });
        return score;
    }

    // Function to update the timer display
    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.innerHTML = `Time Remaining: ${minutes}m ${seconds}s`;
    }

    // Function to handle the timer
    function startTimer() {
        const timerInterval = setInterval(function () {
            updateTimerDisplay();

            if (timeLeft === 0) {
                clearInterval(timerInterval);
                // Automatically submit the quiz when time runs out
                alert("Time's up! Quiz submitted.");
                submitQuizOnTimeout();
            } else {
                timeLeft--;
            }
        }, 1000);
    }

    // Function to handle quiz submission when time runs out
    function submitQuizOnTimeout() {
        // You can call the same logic used to submit the quiz when the timer runs out
        // For simplicity, I'm using the same logic as the submitBtn click event
        const score = calculateScore();
        scoreDiv.textContent = `Your score: ${score}/${quizData.questions.length}`;
        quizResultsDiv.style.display = "block";
        correctAnswersDiv.style.display = "block"; // Display the container for correct answers
        // Hide quiz questions
        quizQuestionsDiv.style.display = "none";
        // Hide timer
        timerElement.style.display = "none";
        // Hide Next Question, Previous Question, and Submit buttons
        nextQuestionBtn.style.display = "none";
        prevQuestionBtn.style.display = "none";
        submitBtn.style.display = "none";

        // Display correct answers
        displayCorrectAnswers();
    }

    // Function to display correct answers
    function displayCorrectAnswers() {
        let correctAnswersHtml = "<div style='color: white;'><strong>Correct Answers:</strong></div>";
        quizData.questions.forEach((question, index) => {
            correctAnswersHtml += `<div style="color: white;">${index + 1}. ${question.options[question.correctAnswer]}</div>`;
        });
        correctAnswersDiv.innerHTML = correctAnswersHtml;
    }

    // Display the first question when the page loads
    displayCurrentQuestion();
    // Start the timer
    startTimer();
});
