const fs   = require('fs');
const yaml = require('js-yaml');
const path = require('path');

/*
  Função para carregar o arquivo de configuração
*/

const load_config_file = (filepath) =>
  yaml.load(fs.readFileSync(path.join(__dirname, filepath)));

const general_config = load_config_file('./app_config.yaml');

module.exports = {
  auth: general_config.auth,
  haru: general_config.haru,
  activities: general_config.activities
}
