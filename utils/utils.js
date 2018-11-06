const getRandomResponse = (responses) => {
  return responses[Math.floor(Math.random() * responses.length)];
}

export getRandomResponse;
