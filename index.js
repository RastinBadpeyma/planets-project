//import modules
const {parse} = require('csv-parse');
const fs  = require('fs');


//Create an empty array to store the parsed CSV data
const habiTablePlanets = [];

function isHabiTablePlanets(planet){
 return planet['koi_disposition'] == 'CONFIRMED'
 && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
 && planet['koi_prad'] <1.6;
}

//Set up a readable stream from the 'kepler_data.csv' file
fs.createReadStream('kepler_data.csv')
         .pipe(parse({
            comment : '#',
            columns : true,
         }))

     //  Attach event listeners to the stream ,The data event provides chunks of data, and we are pushing these chunks directly into the results array.
        .on('data' , (data) =>{
           if(isHabiTablePlanets(data)){
            habiTablePlanets.push(data);
           }
        })
        //'error' event: Triggered in case of an error during reading the stream. It logs the error to the console.
        .on('error' , (err) => {
           console.log('err');
        })
        //end event: Triggered when the stream has been fully read.
        .on('end' , ()=>{
         console.log(`${habiTablePlanets.length} habitable planets found!`);
         console.log(' Done');
        })
 
