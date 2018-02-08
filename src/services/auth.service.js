const users = [
    { 
        username: 'test',
        password: 'password'
    },
    { 
        username: 'test1',
        password: 'password'
    }
]

function login({ username, password }) {
    return users.filter(u => u.username === username && u.password === password);
}

export default {
    login
};