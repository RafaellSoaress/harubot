const fs   = require('fs');
const yaml = require('js-yaml');
const path = require('path');

const load_config_file = (filepath) => {
  return yaml.load(fs.readFileSync(path.join(__dirname, filepath)))
}

module.exports = {
  auth: load_config_file('./app_config.yaml').auth,
  haru: load_config_file('./app_config.yaml').haru,
  activities: load_config_file('./app_config.yaml').activities
}
