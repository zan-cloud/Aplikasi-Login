/**
 * Menangani pengiriman formulir login dan memeriksa kecocokan email dan kata sandi.
 * Jika email dan kata sandi cocok, mengarahkan ke halaman utama.
 * Jika tidak cocok, menampilkan pop-up error.
 * 
 * @event submit
 * @param {Event} event - Peristiwa pengiriman formulir login.
 */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// Email dan kata sandi yang diharapkan untuk login.
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/**
 * Menangani pengiriman formulir login.
 * @param {Event} event - Peristiwa pengiriman formulir yang memicu fungsi ini.
 */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir yang sebenarnya

  const email = inputEmailElement.value; // Mengambil nilai email dari input
  const password = inputPasswordElement.value; // Mengambil nilai kata sandi dari input

  // Memeriksa apakah email dan kata sandi cocok dengan yang diharapkan
  if (email == expectedEmail && password == expectedPassword) {
    goToHome(); // Mengarahkan ke halaman utama jika login berhasil
  } else {
    showPopUp(); // Menampilkan pop-up error jika login gagal
  }
});
