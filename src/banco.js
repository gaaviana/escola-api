import mysql from 'mysql2'; // imortando o modulo

// dados da conexão
// const conexao = mysql.createConnection ({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//  database: 'escola_api' 
// });

 const conexao = mysql.createConnection ({
   host: 'db4free',
   user: 'paulino_gavi',
   password: 'santos1912',
  database: 'gavi_banco' 
 });

// conectando e passando mensagem de erro
conexao.connect( erro => {
    if (erro){
        console.log(`Erro ao conectar: ${erro.message}`);
    } else {
        console.log(`Banco de dados conectado em: ${conexao.config.host}.`);
        
    }
});

// exportanto
export default conexao