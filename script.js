document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Daftar pengguna dan kata sandi yang valid
    const validUsers = {
        'Nizam': '1234',
        'Kenan': '4321',
        'Azka': '100',
        'Rifat': '222'
        // Tambahkan lebih banyak pengguna di sini jika perlu
    };

    if (validUsers[username] && validUsers[username] === password) {
        // Login berhasil, alihkan ke halaman utama
        window.location.href = 'index.html';
    } else {
        // Login gagal
        document.getElementById('error-message').textContent = 'Username atau password salah!';
    }
});
