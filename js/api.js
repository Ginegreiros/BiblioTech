
// ======================================================
// SIMULAÇÃO DE API
// Responsável pelas operações de cadastro,
// consulta e autenticação do sistema.
// ======================================================

const DB_KEY = 'biblioteca_db_v1';

function getDatabase() {
    const data = localStorage.getItem(DB_KEY);
    if (!data) {
        return { users: [], books: [], loans: [] };
    }
    try {
        return JSON.parse(data);
    } catch {
        return { users: [], books: [], loans: [] };
    }
}

function saveDatabase(data) {
    localStorage.setItem(DB_KEY, JSON.stringify(data));
}

export const api = {

    // USUÁRIOS
    createUser(userData) {
        if (!userData.name)  throw new Error('Nome obrigatório');
        if (!userData.email) throw new Error('E-mail obrigatório');

        const db = getDatabase();

        if (db.users.find(u => u.email === userData.email)) {
            throw new Error('E-mail já cadastrado');
        }

        userData.id = Date.now();
        db.users.push(userData);
        saveDatabase(db);
        return userData;
    },

    // LOGIN
    login(email, password) {
        const db = getDatabase();
        const user = db.users.find(u => u.email === email && u.password === password);

        if (!user) throw new Error('Usuário ou senha inválidos');

        return user;
    },

    // LIVROS
    createBook(bookData) {
        const db = getDatabase();

        bookData.id        = Date.now();
        bookData.available = parseInt(bookData.copies);

        db.books.push(bookData);
        saveDatabase(db);
        return bookData;
    },

    listBooks() {
        return getDatabase().books;
    }
};