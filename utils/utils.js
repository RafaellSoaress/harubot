module.exports = {
  getRandomResponse: (responses) => {
   return responses[Math.floor(Math.random() * responses.length)];
  }
}
