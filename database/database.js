const level    = require('level');
const sublevel = require('level-sublevel');

const ora      = require('ora');
const path     = require('path');
const colors   = require('colors');
const Database = require('../entity/database.js');

const spinner = ora();

spinner.start('Carregando os dados do banco local...'.yellow);
const db = sublevel(level(path.resolve(path.join(__dirname, './db')), { valueEncoding: 'json' }));
spinner.succeed('Dados carregados com sucesso.'.cyan);

spinner.start('Instanciando a classe do Banco...'.yellow);
const database = new Database(db);
spinner.succeed('Instância do banco pronta.'.cyan)

// database.regions -> usuarios
spinner.start('Criando as subregiões do banco de dados LevelDB'.yellow);
database.createSubRegion('usuarios');
database.createSubRegion('historias');
spinner.succeed('Subregiões do banco criadas com sucesso.'.cyan);

database.addInRegion('usuarios')({ nome: 'teste' });
// database.getAllFromRegion('usuarios')
//   .then(response => console.log(response));

// regionAddingData Example
// database.addInRegion('usuarios')({ nome: 'teste' });
// database.addInRegion('usuarios', 'admin')({ nome: 'teste2' });

// database.setDefaults(defaults);
// database.loadDefaults();

module.exports = database;
