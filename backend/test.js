//const fs = require('fs');


//let data = {
  //  first_name: 'voicu',
   // last_name : 'bogdan',
   // email: 'adresa_de_email',
    //serieCI: 'HD',
    //numarCI: '321321',
    //oras: 'orastie',
    //strada: 'pricaz',
    //numar: '66',
    //bloc: '66',
    //scara: 'C',
    //judet: 'Hunedoara',
//}

//let info = JSON.stringify(data);

//fs.writeFileSync('info.json', info);
const {spawn} = require('child_process')
let dataToSend;
    // spawn new child process
const python = spawn('python3', ['./test.py']).spawn;

    //collect data from script
