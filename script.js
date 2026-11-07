// TODO: ganti dengan fitur atau keunggulan produk kalian
const fitur = [
    { judul: 'Fitur pertama', keterangan: 'Apa manfaatnya untuk pengguna.' },
    { judul: 'Fitur kedua', keterangan: 'Apa manfaatnya untuk pengguna.' },
    { judul: 'Fitur ketiga', keterangan: 'Apa manfaatnya untuk pengguna.' },
];

function tampilkanFitur() {
    const wadah = document.getElementById('daftar-fitur');
    wadah.innerHTML = '';
    for (const f of fitur) {
        const kartu = document.createElement('article');
        kartu.className = 'kartu';
        kartu.innerHTML = `<h3>${f.judul}</h3><p>${f.keterangan}</p>`;
        wadah.appendChild(kartu);
    }
}

// Form belum dikirim ke server; cukup periksa isian lalu tampilkan pesan.
const form = document.getElementById('form-daftar');
const pesan = document.getElementById('pesan');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = form.nama.value.trim();
    const email = form.email.value.trim();

    pesan.hidden = false;
    // checkValidity() memeriksa atribut required dan type="email" di HTML
    if (nama === '' || !form.email.checkValidity()) {
        pesan.textContent = 'Isi nama dan email yang benar.';
        pesan.className = 'pesan gagal';
        return;
    }
    pesan.textContent = `Terima kasih, ${nama}. Kami akan menghubungi ${email}.`;
    pesan.className = 'pesan berhasil';
    form.reset();
});

tampilkanFitur();
