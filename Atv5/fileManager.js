import * as fs from 'fs';

//Questão 5
function readJsonFile(path){

    fs.readFile(path, 'utf8', function (err, data) {
        
        if (err) {

        console.log('file not found')

        }else
            console.log(data)
    })
}


function writeJsonFile(path, content){

    fs.writeFile(path, content, function (err, data) {
        
        if (err) {

        console.log('file not found')

        }else
            console.log('file written succesfully')
    })
}

readJsonFile('file.json')
writeJsonFile('./file.json', 'test')


