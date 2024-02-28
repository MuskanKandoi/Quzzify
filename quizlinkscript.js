document.getElementById("quizLinkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const quizLink = document.getElementById("quizLink").value;
    // Redirect to quiz page with the provided quiz link
    window.location.href = `quiztaker.html?quizLink=${encodeURIComponent(quizLink)}`;
});
