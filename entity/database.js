class Database {

  constructor(db, df) {
    this.db = db;
    this.defaults = {};
    this.start();
  }

  loadDefaults(defaults) {
    this.db
      .defaults(defaults || this.defaults)
      .write();
  }

  setDefaults(defaults) {
    this.defaults = defaults;
  }

  start() {
  }

}

module.exports = Database;
