const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`);

const fetchBreedDescription = function (breedName, callback) {

};

module.exports = { fetchBreedDescription };
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
//   if (error) {
//     console.log('error:', error);
//   }
//   const data = JSON.parse(body);
//   if (!data[0]) {
//     console.log('breed not found');
//   } else {
//     console.log(data);
//     console.log(typeof data);
//     console.log(data[0].description);
//   }
// });

