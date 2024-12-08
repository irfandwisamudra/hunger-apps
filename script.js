// console.log('Hello, World!');

// let hari = 'minggu';
// let waktu = 'pagi';

// if (waktu == 'pagi') {
//   console.log('jogging');
// } else if (waktu == 'sore') {
//   console.log('memancing');
// }

// if (hari == 'minggu') {
//   if (waktu == 'pagi') {
//     for (let i = 0; i < 5; i++) {
//       console.log('jogging');
//     }
//   } else if (waktu == 'sore') {
//     console.log('memancing');
//   }
// } else {
//   if (waktu == 'pagi') {
//     for (let i = 0; i < 2; i++) {
//       console.log('jogging');
//     }
//   } else if (waktu == 'sore') {
//     console.log('memancing');
//   }
// }

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

const listRestoran = document.querySelector('.list-restoran');

for (let i = 0; i < 10; i++) {
  const restoran = document.createElement('div');
  restoran.classList.add('restoran');

  restoran.innerHTML = `
    <div class="img-content">
      <img src="hero.jpeg" alt="Gambar Restoran" />
      <div class="kota">
        <p>Bangkalan</p>
      </div>
    </div>

    <div class="info-content">
      <h2>Rating: 4.5</h2>
      <h1>Bebek Sinjay</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Accusamus, laudantium.
      </p>
    </div>
  `;

  listRestoran.appendChild(restoran);
}
