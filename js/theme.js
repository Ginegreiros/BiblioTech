

// ======================================================
// CONTROLE DE TEMA CLARO E ESCURO
// Permite ao usuário alternar entre os temas
// e salva a preferência no LocalStorage.
// ======================================================


export function initTheme() {
    const themeToggle = document.getElementById('checkbox');
    const html        = document.documentElement;

    // Recupera o tema salvo anteriormente
    const savedTheme  = localStorage.getItem('theme');

    // Aplica tema salvo
    html.setAttribute('data-theme', savedTheme === 'dark' ? 'dark' : 'light');

    if (themeToggle) {
        themeToggle.checked = savedTheme === 'dark';

        // Evento responsável por alternar o tema da aplicação
        themeToggle.addEventListener('change', () => {
            const theme = themeToggle.checked ? 'dark' : 'light';
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        });
    }
}