import chalk from 'chalk';
import * as fs from 'fs';

//Questão 4

console.log("ler arquivo .md")

fs.readFile("exemplo.md", 'utf8', function (err, data) {
    
    if (err) {

      console.log('file not found')

    }else
        console.log(chalk.blue(data))
    

});


