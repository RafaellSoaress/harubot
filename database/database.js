const level    = require('level');
const sublevel = require('level-sublevel');

const ora      = require('ora');
const path     = require('path');
const Database = require('../entity/database.js');

const spinner = ora();

spinner.start('Carregando os dados do banco local...');
const db = sublevel(level(path.resolve(path.join(__dirname, './db')), { valueEncoding: 'json' }));
spinner.succeed('Dados carregados com sucesso.');

spinner.start('Instanciando a classe do Banco...');
const database = new Database(db);
spinner.succeed('Instância do banco pronta.')

// database.regions -> usuarios
spinner.start('Criando as subregiões do banco de dados LevelDB');
database.createSubRegion('usuarios');
spinner.succeed('Subregiões do banco criadas com sucesso.');

database.addInRegion('usuarios')({ nome: 'teste' });
// database.getAllFromRegion('usuarios')
//   .then(response => console.log(response));

// regionAddingData Example
// database.addInRegion('usuarios')({ nome: 'teste' });
// database.addInRegion('usuarios', 'admin')({ nome: 'teste2' });

// database.setDefaults(defaults);
// database.loadDefaults();

module.exports = database;
