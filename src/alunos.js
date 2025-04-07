//importanto o banco de dados
import conexao from "./banco.js";

// funções para o CRUD

function ler(res) {
    // comando SQL a ser executado
    const sql = 'SELECT * FROM alunos ORDER BY nome';

    // Executando a query a partir da conexão
    conexao.query(sql, (erro, resultados) => {
        if (resultados === 0) {
            res.status(204).end();
            return; // forçar a interrupição do codigo
        }
        
        // se der erro status '400' e me mostre o erro
        if (erro) {
          res.status(400).json(erro.code);  
        // se der resultado  status '200' e mostre o resultado
        // o resultado da const SQL
        } else {
          res.status(200).json(resultados)    
        }
    })
}

// função para cadastrar alunos
// o parametro aluno é referente ao objeto que será utilizado para passar os dados, via json ou formulario
function inserir(aluno, res) {
    const sql = "INSERT INTO alunos SET ?";

    conexao.query(sql, aluno, (erro) => {
      if (erro) {
          res.status(400).json(erro.code);
      } else {
        res.status(201).json({"status" : "aluno, inserido!"});
      }
    });
}

// função ler um aluno
function lerUm(id, res) {
  const sql = "SELECT * FROM alunos WHERE id = ?"

  conexao.query(sql, id, (erro, resultado) => {
    if (resultado === 0) {
      res.status(204).end();
      return;
    }

    if (erro) {
      res.status(400).json({ error: erro.code });
    } else {
      res.status(200).json(resultado[0]);
    }
  })
  
}

// função que exclui em aluno
function excluir(id, res) {
  const sql = "DELETE FROM alunos WHERE id = ?";

  conexao.query(sql, id, (erro, resultado) => {
    if (erro) {
      res.status(400).json({ error: erro.code });
    } else {
      res.status(200).json(resultado[0]);
    }
  });
}

// passa o id para saber qual aluno atulaizar
// passa aluno para capturar o objeto json
function atualizar(id, aluno, res){
// set = dados que esta sendo capturado
// id = id do aluno
  const sql = "UPDATE alunos SET ? WHERE id = ?";
 
  conexao.query(sql, [aluno, id], (erro, resultados) => {
    if(erro){
      res.status(400).json(erro.code);
    } else {
 
      // ... reticências é chamado spread operator (operador de espalhamento de objeto)
      res.status(200).json({...aluno, id});
    }
  })
}

export {ler, inserir, lerUm, excluir, atualizar};