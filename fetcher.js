const request = require('request');
const fs = require('fs'); 
const inputs = process.argv.slice(2);


const pageDowloader = function() {
  request(`${inputs[0]}`, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage. 

    fs.writeFile(`${inputs[1]}`, body, (error, data) => {
      //console.log(`Downloaded and saved 1235 bytes to ${inputs[1]}`)
      if (!error) {
        console.log(`Downloaded and save ${body.length} bytes to ${inputs[1]}`);
      }
    });
  });

};


pageDowloader(); 

