const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('.icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    icon.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Lưu trạng thái theme vào localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    icon.textContent = '☀️';
}

// Lưu trạng thái khi toggle
themeToggle.addEventListener('click', () => {
    const theme = body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
});