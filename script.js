const toggleButton = document.getElementById('toggleMode');

// Función para aplicar el modo oscuro si está activado
function applyDarkMode() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('dark-mode');
        toggleButton.textContent = 'Modo Oscuro';
    }
}

// Alternar el modo oscuro y guardar la preferencia
toggleButton.addEventListener('click', () => {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'disabled');
    } else {
        localStorage.setItem('darkMode', 'enabled');
    }
    applyDarkMode();
});

// Aplicar el modo oscuro en la carga de la página
applyDarkMode();
