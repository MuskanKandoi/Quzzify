function redirectToQuizPage(role) {
    // You can navigate to different pages based on the selected role
    // For now, let's just log the selected role to the console
    console.log('Selected Role:', role);
    // You can use window.location.href to navigate to a different page
    // Example: window.location.href = '/quiz-taker-page';
}
function redirectToQuizPage(role) {
    if (role === 'quiz-taker') {
        window.location.href = 'quizlink.html';
    } else if (role === 'quiz-creator') {
        // Redirect to quiz creator page or perform other actions
        window.location.href = 'quizcreator.html';
    }
    // Add more conditions for other roles if needed
}
