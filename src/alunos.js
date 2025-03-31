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

        if (erro) {
          res.status(400).json(erro.code);  
        } else {
          res.status(200).json(resultados)    
        }
    })
}

// função para cadastrar alunos
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

export {ler, inserir, lerUm, excluir};