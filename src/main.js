const codeIcon = document.getElementById('code-icon');

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

console.log(codeIcon);
