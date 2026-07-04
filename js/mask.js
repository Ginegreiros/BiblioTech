// ======================================================
// MÁSCARAS DE FORMATAÇÃO
// Aplicação automática de máscaras para CPF,
// telefone e outros campos do formulário.
// ======================================================

export function initMasks() {

    // Aplica máscara de CPF no formato 000.000.000-00
    const cpfInput = document.getElementById('cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d)/, '$1.$2');
            v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
            e.target.value = v;
        });
    }

    // Aplica máscara de telefone no formato (00) 00000-0000
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '').slice(0, 11);
            v = v.replace(/^(\d{2})(\d)/, '($1) $2');
            v = v.replace(/(\d{4,5})(\d{4})$/, '$1-$2');
            e.target.value = v;
        });
    }
}