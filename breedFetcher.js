const request = require('request');

// const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log('breed not found');
    } else {
      console.log(data);
      console.log(typeof data);
      console.log(data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };

