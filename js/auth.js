const API_URL = 'https://api.itutrade.online/api';

// Kiểm tra nếu chưa login mà vào dashboard thì đá về trang login
function checkAuth() {
    const token = localStorage.getItem('jwt');
    if (!token && window.location.pathname.includes('dashboard.html')) {
        window.location.href = 'login.html';
    }
}

function logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userData');
    window.location.href = 'login.html';
}

// Chạy kiểm tra ngay khi load script
checkAuth();
