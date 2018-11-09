const level    = require('level');
const sublevel = require('level-sublevel');

const path     = require('path');
const Database = require('../entity/database.js');

const db = sublevel(level(path.resolve(path.join(__dirname, './db')), { valueEncoding: 'json' }));

const database = new Database(db);

// database.regions -> usuarios
database.createSubRegion('usuarios');

database.addInRegion('usuarios')({ nome: 'teste' });
database.getAllFromRegion('usuarios')
  .then(response => console.log(response));

// regionAddingData Example
// database.addInRegion('usuarios')({ nome: 'teste' });
// database.addInRegion('usuarios', 'admin')({ nome: 'teste2' });

// database.setDefaults(defaults);
// database.loadDefaults();

module.exports = database;
