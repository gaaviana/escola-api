import express from "express";


const app = express();
const porta = 3000;

app.listen(porta, () => {
    console.log(`... ${porta}`);
})

app.get('/', (req, res) => {
    res.send('API utilizando Node.js, Express e MySQL');
})

// Exibir todos os alunos
app.get('/alunos', (req, res) => {
    res.send('Exibir todos os alunos')
})

// Exibindo dados de um aluno
app.get('/alunos/:id', (req, res) => {
    res.send('Exibindo dados de um aluno')
})

// cadastrando um aluno
app.post('/alunos', (req, res) => {
    res.send('Cadastrando dados de UM aluno')
})

// atualizando aluno
app.patch('/alunos/:id', (req, res) =>{
    res.send('atualizando dados do aluno')
})

// deletando dados 
app.delete('/alunos/:id', (req, res) => {
    res.send('deletando aluno')
})

