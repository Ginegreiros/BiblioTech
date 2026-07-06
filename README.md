# BiblioTech 📚

> 🌍 **Languages:** [Português](#-português) | [English](#-english)

Acesse o projeto online / Access the live project: **[BiblioTech no GitHub Pages](https://ginegreiros.github.io/BiblioTech/)**

---

## 🇧🇷 Português

### 📖 Sobre o Projeto
O BiblioTech é um dashboard interativo para gerenciamento de bibliotecas. O sistema foi desenvolvido para facilitar operações rotineiras como o cadastro de livros, gestão de estudantes, controle da equipe administrativa (com diferentes níveis de acesso) e recepção de mensagens via formulário de contato. 

A aplicação funciona inteiramente no lado do cliente (Front-end), utilizando o armazenamento local do navegador para simular a persistência de um banco de dados real.

### ✨ Funcionalidades
* **Persistência de Dados (Simulada):** Gerenciamento de estado e simulação de banco de dados (`biblioteca_db_v1`) via LocalStorage.
* **Autenticação:** Sistema de login simulado para acesso ao dashboard.
* **Gestão Dinâmica de Temas:** Alternância nativa entre Tema Claro (Padrão) e Tema Escuro, salvando a preferência do usuário.
* **Validação e Máscaras:** Aplicação automática de máscaras de formatação para os inputs de CPF e Telefone.
* **Feedback Visual:** Sistema de notificações interativas (Toasts) para exibir mensagens de sucesso, erro e alertas em tempo real.
* **Múltiplos Formulários:** Páginas dedicadas e validadas para cadastro de Livros, Estudantes, Bibliotecários (Administrador/Funcionário) e Contato.

### 🚀 Tecnologias Utilizadas
* **HTML5:** Estruturação semântica e acessível.
* **CSS3:** Estilização com variáveis (Custom Properties), Flexbox e design responsivo.
* **JavaScript (ES6+):** Lógica da aplicação dividida de forma modular (import/export).
* **Phosphor Icons:** Biblioteca de ícones utilizada em toda a interface.

### 🛠️ Como testar localmente
1. Clone este repositório: 
   `git clone https://github.com/Ginegreiros/BiblioTech.git`
2. Acesse a pasta do projeto.
3. **Importante:** Como o projeto utiliza módulos do JavaScript (ES6 Modules), você precisa abri-lo através de um servidor local para evitar bloqueios de CORS. 
   * Se estiver usando o VS Code, instale a extensão **Live Server** e clique em *Go Live* no arquivo `index.html`.

---

## 🇺🇸 English

### 📖 About the Project
BiblioTech is an interactive library management dashboard. The system was developed to streamline routine operations such as book registration, student management, administrative staff control (with different access levels), and receiving messages via a contact form. 

The application runs entirely on the client-side (Front-end), utilizing the browser's local storage to simulate a real database persistence.

### ✨ Features
* **Data Persistence (Simulated):** State management and database simulation (`biblioteca_db_v1`) via LocalStorage.
* **Authentication:** Simulated login system for dashboard access.
* **Dynamic Theme Management:** Native toggle between Light Theme (Default) and Dark Theme, saving the user's preference.
* **Validation and Masks:** Automatic application of formatting masks for CPF and Phone number inputs.
* **Visual Feedback:** Interactive notification system (Toasts) to display success, error, and alert messages in real-time.
* **Multiple Forms:** Dedicated and validated pages for registering Books, Students, Librarians (Admin/Staff), and Contact.

### 🚀 Technologies Used
* **HTML5:** Semantic and accessible structuring.
* **CSS3:** Styling with variables (Custom Properties), Flexbox, and responsive design.
* **JavaScript (ES6+):** Application logic divided in a modular way (import/export).
* **Phosphor Icons:** Icon library used throughout the UI.

### 🛠️ How to run locally
1. Clone this repository: 
   `git clone https://github.com/Ginegreiros/BiblioTech.git`
2. Enter the project folder.
3. **Important:** Since the project uses JavaScript modules (ES6 Modules), you need to serve it through a local server to avoid CORS issues. 
   * If you are using VS Code, install the **Live Server** extension and click *Go Live* on the `index.html` file.
