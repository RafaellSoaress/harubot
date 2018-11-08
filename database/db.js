const FileSync = require('lowdb/adapters/FileSync')
const Database = require('../entity/database.js');

const low      = require('lowdb');
const defaults = require('./defaults.json');
const adapter  = new FileSync('./database.json');


const db       = new low(adapter);
const database = new Database(db);

database.setDefaults(defaults);
// database.loadDefaults(defaults);

module.exports = database;
