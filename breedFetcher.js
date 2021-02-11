const request = require('request');


const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    console.log(data)
    if (!data[0]) {
      return callback(error, 'breed not found');
    } else {
      return callback(body, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };



// console.log(data);
// console.log(typeof data);
// console.log(data[0].description);

