const fs = require('fs');


fs.readFile('./texto.txt', 'utf-8', (err, data) => {
    fs.readFile('./texto2.txt', 'utf-8', (err, data3) => {
        fs.writeFile('./resultadofinal.txt', `${data} e o ${data3}`, 'utf-8', err => {
            console.log("File Writen")
        })
    })
})