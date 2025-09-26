const words = ["Web Developer", "Web Designer", "Creative Coder"];
const typingTextElement = document.querySelector(".typing-text");

let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  const currentWord = words[wordIndex];
  typingTextElement.textContent = currentWord.substring(0, charIndex++);
  
  if (charIndex <= currentWord.length) {
    setTimeout(typeWord, 150); // Typing speed
  } else {
    setTimeout(deleteWord, 1000); // Pause after typing a word
  }
}

function deleteWord() {
  const currentWord = words[wordIndex];
  typingTextElement.textContent = currentWord.substring(0, charIndex--);
  
  if (charIndex >= 0) {
    setTimeout(deleteWord, 100); // Deleting speed
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Move to next word
    setTimeout(typeWord, 500); // Pause before typing the next word
  }
}

// Start the typewriter effect
typeWord();
