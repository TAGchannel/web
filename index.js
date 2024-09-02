// Tambahkan event listener pada semua ikon skill
document.querySelectorAll('.skill-item i').forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.add('shake'); // Tambahkan kelas shake

        // Hapus kelas shake setelah animasi selesai (0.5 detik)
        setTimeout(() => {
            icon.classList.remove('shake');
        }, 500);
    });
});

// Tambahkan animasi pada ikon skill saat halaman dimuat
window.addEventListener('load', () => {
    document.querySelectorAll('.skill-item i').forEach(icon => {
        icon.classList.add('animate-on-load');
    });
});
