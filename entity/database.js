class Database {

  constructor(db) {
    this.db = db;
    this.regions = new Object();
  }

  async add(key, data) {
    await this.db.put(key, data, (err) => {
      if(err) console.log(err);
    });
  }
  
  async get(key) {
    return await this.db.get(key, (err, data) => {
      if(err) console.log(err)
      else return data;
    })
  }

  createSubRegion(region) {
    this.regions[region] = this.db.sublevel(region);
  }

  addInRegion(region, regionBlock = null) {
    return (data) => {
      return this.regions[region].put(regionBlock || region, data, (err) => {
        if(err) console.log(err);
      })
    }
  }

  async getAllFromRegion(region) {

    const self = this;

    return new Promise(async (resolve, reject) => {
      const data   = new Array();
      const stream = self.regions[region].createReadStream();

      await stream.on('data', (regionData) => {
        data.push(regionData);
      })

      await stream.on('close', () => {
        data.length ? resolve(data) : reject(false);
      })
    });


  }
}

module.exports = Database;
