const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      return callback(error, 'breed not found');
    } else {
      return callback(error, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };



// console.log(data);
// console.log(typeof data);
// console.log(data[0].description);

