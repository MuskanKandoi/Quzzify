document.addEventListener("DOMContentLoaded", function() {
    const questionsContainer = document.getElementById("questionsContainer");
    const addQuestionBtn = document.getElementById("addQuestionBtn");
    const submitQuizBtn = document.getElementById("submitQuizBtn");
    let questionCounter = 1;

    addQuestionBtn.addEventListener("click", function() {
        questionCounter++;
        createQuestionElement(questionCounter);
    });

    submitQuizBtn.addEventListener("click", function() {
        // Add logic to handle quiz submission
        alert("Quiz Submitted!");
    });

    function createQuestionElement(questionNumber) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        questionDiv.innerHTML = `
            <label for="question${questionNumber}">Question ${questionNumber}:</label>
            <input type="text" id="question${questionNumber}" class="questionInput" placeholder="Enter Question">

            <label for="option1${questionNumber}">Option 1:</label>
            <input type="text" id="option1${questionNumber}" class="optionInput" placeholder="Enter Option 1">

            <label for="option2${questionNumber}">Option 2:</label>
            <input type="text" id="option2${questionNumber}" class="optionInput" placeholder="Enter Option 2">

            <label for="option3${questionNumber}">Option 3:</label>
            <input type="text" id="option3${questionNumber}" class="optionInput" placeholder="Enter Option 3">

            <label for="option4${questionNumber}">Option 4:</label>
            <input type="text" id="option4${questionNumber}" class="optionInput" placeholder="Enter Option 4">

            <label for="correctAnswer${questionNumber}">Correct Answer:</label>
            <select id="correctAnswer${questionNumber}">
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
            </select>
        `;

        questionsContainer.appendChild(questionDiv);
    }

    // Initial question
    createQuestionElement(questionCounter);
});
