const codeIcon = document.getElementById('code-icon');

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('nav');
  if (window.scrollY > 0) {
    navbar.classList.replace('bg-white', 'bg-white/75');
  } else {
    navbar.classList.replace('bg-white/75', 'bg-white');
  }
});

codeIcon.addEventListener('mouseenter', e => {
  const codeText = document.getElementById('code-text');
  codeText.classList.add('opacity-100');
  codeText.classList.add('transition');
  codeText.classList.add('duration-500');
});

codeIcon.addEventListener('mouseleave', e => {
  const codeText = document.getElementById('code-text');
  codeText.classList.remove('opacity-100');
  codeText.classList.remove('transition');
  codeText.classList.remove('duration-500');
});

document.addEventListener('DOMContentLoaded', () => {
  const quote = document.getElementById('quote');
  const cite = document.getElementById('author');
  async function updateQuote() {
    // Fetch a random quote from the Quotable API
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    if (response.ok) {
      // Update DOM elements
      quote.textContent = data.content;
      cite.textContent = `-${data.author}`;
    } else {
      quote.textContent = 'An error occured';
      console.log(data);
    }
  }
  updateQuote();
});
// console.log(codeIcon);
