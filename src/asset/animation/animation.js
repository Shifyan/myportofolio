// Seleksi elemen yang akan dianimasikan
const kotak = document.getElementById('kotak');

// Animasi menggunakan Anime.js
kotak.addEventListener('click', () => {
  anime({
    targets: kotak,
    translateX: 250, // Pergeseran horizontal sejauh 250px
    duration: 1000, // Durasi animasi dalam milidetik (1 detik)
    easing: 'easeInOutQuad' // Jenis easing untuk animasi
  });
});
