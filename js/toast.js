
// ======================================================
// SISTEMA DE NOTIFICAÇÕES
// Exibe mensagens de sucesso, aviso e erro
// para interação com o usuário.
// ======================================================

export function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 3000);
}