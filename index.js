//import modules
const {parse} = require('csv-parser');
const fs  = require('fs');


//Create an empty array to store the parsed CSV data
const results = [];


//Set up a readable stream from the 'kepler_data.csv' file
fs.createReadStream('kepler_data.csv')

     //  Attach event listeners to the stream ,The data event provides chunks of data, and we are pushing these chunks directly into the results array.
        .on('data' , (data) =>{
           results.push(data);
        })
        //'error' event: Triggered in case of an error during reading the stream. It logs the error to the console.
        .on('error' , (err) => {
           console.log('err');
        })
        //end event: Triggered when the stream has been fully read.
        .on('end' , ()=>{
         console.log("Results",results);
         console.log(' Streaming Done');
        })
 
