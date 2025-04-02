
const API_URL = 'http://localhost:3000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: { 'Content-Type': 'application/json' }
});

async function registerCategory(name, slug) {
    try {
        const response = await api.post('/categories/add', { name, slug });
        return response.data;
    } catch (error) {
        return { error: error.response.data.message };
    }
}

async function fetchCategory() {
    try {
        const response = await api.get('/categories'); // retornar lista de categoria
        return response.data.categories; // Retorna apenas a lista
    } catch (error) {
        console.error("Erro ao buscar categoria:", error);
        return []; // Retorna array vazio em caso de erro
    }
}


async function loginUser(email, passwd) {
    try {
        const response = await api.post('/login', { email, passwd }, { withCredentials: true });
        return response.data;
    } catch (error) {
        return { error: error.response.data.message };
    }
}

async function registerUser(first_name, last_name, email, passwd) {
    try {
        const response = await api.post('/register', { first_name, last_name, email, passwd });
        return response.data;
    } catch (error) {
        return { error: error.response.data.message };
    }
}



