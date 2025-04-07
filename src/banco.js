// imortando o mysql2
import mysql from 'mysql2'; 
// dados da conexão
// const conexao = mysql.createConnection ({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//  database: 'escola_api' 
// });

// conexao xom o banco de dados na sintaxe do mysql2
 const conexao = mysql.createConnection ({
   host: 'db4free.net',
   user: 'paulino_gavi',
   password: 'santos1912',
  database: 'gavi_banco' 
 });

// conectando e passando mensagem de erro
// se acontecer algum erro a mensagem sera armazenada em uma const "erro" e sera exibida para o usuario, caso o contrario sera exibida da mesagem que o banco esta conectado.
// erro e conexao são objetos por isso o uso do ponto.
conexao.connect( erro => {
    if (erro){
        console.log(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}.`);
        
    }
});

// exportanto para o arquivo aluno
// importante para rodar todos juntos
export default conexao