import express, { urlencoded } from "express";
import { ler, inserir, lerUm, excluir, atualizar } from "./src/alunos.js";
import cors from 'cors';

const app = express();
const porta = process.env.PORT || 3000;

// habilitando para dar suporte ao formato json
app.use(express.json());

// habilitando para dar suporte para dados a partir de inputs de formularios
app.use(express.urlencoded({extended:true}));


app.use(cors())


app.listen(porta, () => {
    console.log(`... ${porta}`);
})

app.get('/', (req, res) => {
   // res.send('API utilizando Node.js, Express e MySQL');
   res.redirect(`https://documenter.getpostman.com/view/43562465/2sB2cSi4Me`);
})

// Exibir todos os alunos
app.get('/alunos', (req, res) => {
    ler(res);
})

// Exibindo dados de um aluno
app.get('/alunos/:id', (req, res) => {
   // capturando o ID que vem di endpoint
    const id = parseInt(req.params.id);

    lerUm(id, res);

})

// cadastrando um aluno
app.post('/alunos', (req, res) => {
    // capturando os dados a partir do corpo da requisição
    const novoAluno = req.body;

    // executando a função inserir e passando os parametros novoAluno e res
    inserir(novoAluno, res);
})

// atualizando aluno
app.patch('/alunos/:id', (req, res) => {
    // res.send(`Atualizando dados do aluno`);
 
    // capturar id
    const id = parseInt(req.params.id);
 
    // pegando as informações do body
    const aluno = req.body;
   
    atualizar(id, aluno, res);
})

// deletando dados 
app.delete('/alunos/:id', (req, res) => {
    
    const id = parseInt(req.params.id);

    excluir(id, res)
})

