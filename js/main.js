
// ======================================================
// ARQUIVO PRINCIPAL DA APLICAÇÃO
// Inicializa os módulos e funcionalidades
// do sistema quando a página é carregada.
// ======================================================


// inicializa o tema
import { initTheme } from './theme.js';

// inicializa as máscaras de input
import { initMasks } from './mask.js';

// inicializa as funcionalidades dos formulários
import { initForms } from './forms.js';
 
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMasks();
    initForms();
});
 