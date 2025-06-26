document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let scores = { science: 0, commerce: 0, arts: 0 };
  const questions = ["q1", "q2", "q3", "q4", "q5", "q6"];

  questions.forEach(q => {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      scores[selected.value]++;
    }
  });

  const resultBox = document.getElementById("result");
  let bestFit = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

  let message = "";
  if (bestFit === "science") {
    message = "🔬 You seem to have a scientific and analytical mindset. Science stream may be best for you!";
  } else if (bestFit === "commerce") {
    message = "📊 You have business sense and logical thinking. Commerce stream suits you!";
  } else {
    message = "🎨 You’re creative and expressive. Arts stream could be your perfect fit!";
  }

  resultBox.textContent = message;
});
