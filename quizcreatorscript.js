

document.addEventListener("DOMContentLoaded", function() {
    const questionsContainer = document.getElementById("questionsContainer");
    const addQuestionBtn = document.getElementById("addQuestionBtn");
    const submitQuizBtn = document.getElementById("submitQuizBtn");
    const createNewQuizBtn = document.getElementById("createNewQuizBtn");
    let questionCounter = 1;

    addQuestionBtn.addEventListener("click", function() {
        questionCounter++;
        createQuestionElement(questionCounter);
    });

    submitQuizBtn.addEventListener("click", function() {
        // Add logic to handle quiz submission
        const uniqueUrl = generateUniqueUrl();
        displayUniqueUrl(uniqueUrl);
        hideButtons();
    });

    createNewQuizBtn.addEventListener("click", function() {
        // Redirect to the quiz creator page
        window.location.href = 'quizcreator.html';
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
    function generateUniqueUrl() {
        // Add logic to generate a unique URL
        // For simplicity, using a random number as an example
        return `https://example.com/quiz/${Math.floor(Math.random() * 100000)}`;
    }

    function displayUniqueUrl(url) {
        // Clear existing content in questionsContainer
        questionsContainer.innerHTML = "";

        // Create a div for displaying the unique URL
        const urlDiv = document.createElement("div");
        urlDiv.classList.add("unique-url");
        urlDiv.textContent = `Your unique quiz URL: ${url}`;

        // Append the div to questionsContainer
        questionsContainer.appendChild(urlDiv);
        createNewQuizBtn.style.display = "block"

        // Display the URL in an alert when clicked
        urlDiv.addEventListener("click", function() {
            alert(`Quiz URL: ${url}`);
        });
    }
    function hideButtons() {
        // Hide addQuestionBtn and submitQuizBtn
        addQuestionBtn.style.display = "none";
        submitQuizBtn.style.display = "none";
    }

    // Initial question
    createQuestionElement(questionCounter);
});
