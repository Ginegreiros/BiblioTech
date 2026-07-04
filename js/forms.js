
/* Arquivo responsável pelas validações dos formulários e feedback visual para o usuário.*/

import { api }       from './api.js';
import { showToast } from './toast.js';

export function initForms() {

    // VALIDAÇÃO DO FORMULÁRIO DE CONTATO
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Impede o recarregamento padrão da página
            e.preventDefault();

            // Captura os valores removendo espaços em branco nas pontas
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validação do Nome (mínimo de 3 caracteres)
            if (name.length < 3) {
                showToast('O nome deve ter pelo menos 3 caracteres.', 'error');
                return;
            }

            // Expressão regular utilizada para validar emails
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showToast('Por favor, insira um e-mail válido.', 'error');
                return;
            }

            // Validação da Mensagem (mínimo de 10 caracteres)
            if (message.length < 10) {
                showToast('A mensagem deve ter pelo menos 10 caracteres.', 'error');
                return;
            }

            // Se passar por todas as validações, simula o envio
            showToast('Mensagem enviada com sucesso!', 'success');
            contactForm.reset();
        });
    }

    // LOGIN
    const loginForm = document.getElementById('login_form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email    = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            if (!email.includes('@')) {
                showToast('Digite um e-mail válido', 'error');
                return;
            }

            try {
                const user = api.login(email, password);
                showToast(`Bem-vindo, ${user.name}!`);
            } catch (error) {
                showToast(error.message, 'error');
            }
        });
    }

    // CADASTRO DE LIVRO
    const bookForm = document.getElementById('books_register');
    if (bookForm) {
        bookForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const bookData = {
                title     : document.getElementById('title').value,
                author    : document.getElementById('author').value,
                publisher : document.getElementById('publisher').value,
                year      : document.getElementById('year').value,
                isbn      : document.getElementById('isbn').value,
                copies    : document.getElementById('copies').value
            };

            try {
                api.createBook(bookData);
                showToast('Livro cadastrado com sucesso!');
                bookForm.reset();
            } catch (error) {
                showToast(error.message, 'error');
            }
        });
    }

    // CADASTRO DE USUÁRIO
    const userForm = document.getElementById('student_register');
    if (userForm) {
        userForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const userData = {
                name     : document.getElementById('name').value,
                email    : document.getElementById('email').value.trim(),
                cpf      : document.getElementById('cpf')?.value,
                phone    : document.getElementById('phone')?.value
            };

            try {
                api.createUser(userData);
                showToast('Usuário cadastrado com sucesso!');
                userForm.reset();
            } catch (error) {
                showToast(error.message, 'error');
            }
        });
    }

    // CADASTRO DE BIBLIOTECÁRIO
    const librarianForm = document.getElementById('librarian_register');
    if (librarianForm) {
        librarianForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Validação simples de confirmação de senha
            const password = document.getElementById('password').value;
            const passwordConfirm = document.getElementById('password-confirm').value;

            if (password !== passwordConfirm) {
                showToast('As senhas não coincidem.', 'error');
                return;
            }

            const userData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value.trim(),
                cpf: document.getElementById('cpf').value,
                phone: document.getElementById('phone').value,
                registration: document.getElementById('registration').value,
                access_level: document.getElementById('access_level').value,
                password: password,
                role: 'librarian'
            };

            try {
                api.createUser(userData);
                showToast('Bibliotecário cadastrado com sucesso!', 'success');
                librarianForm.reset();
            } catch (error) {
                showToast(error.message, 'error');
            }
        });
    }
        
}