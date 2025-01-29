// Переключение темы
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Проверяем сохранённую тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeIcon.textContent = '🌙'; // Иконка для тёмной темы
    } else {
        themeIcon.textContent = '🌞'; // Иконка для светлой темы
    }

    // Переключение темы
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');

        // Меняем иконку
        themeIcon.textContent = isDarkTheme ? '🌙' : '🌞';

        // Сохраняем тему в localStorage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });
});

// При загрузке страницы
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Плавная прокрутка к секциям
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Инициализация AOS (анимации при прокрутке)
AOS.init({
    duration: 1000,
    once: true
});