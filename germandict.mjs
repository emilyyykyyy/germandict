#!/usr/bin/env zx  
console.log('Willkommen!');
  
let option;
  do {
    console.log('Select an option of translation:');
    console.log('1) English to German');
    console.log('2) Deutsch nach Englisch');
    console.log('3) Exit');
    option = await question('Please enter option: ');

    let word = '';
    let translate = '';
    let outputLines = [];
    let translationIndex = -1;
    switch (option){
        case '1': // English to German
          word = await question('Enter a word to translate to German: ');
          translate = await $`curl dict.org/d:${word}:fd-eng-deu`
          outputLines = translate.stdout.split('\n');
          translationIndex = outputLines.findIndex(line => line.includes(word));
          console.log(outputLines[translationIndex+2]);
          break;
        case '2':
          word = await question('Enter a word to translate to English: ');
          translate = await $`curl dict.org/d:${word}:fd-deu-eng`
          outputLines = translate.stdout.split('\n');
          translationIndex = outputLines.findIndex(line => line.includes(word));
          console.log(outputLines[translationIndex+2]);
          break;
        case '3':
          console.log('Exiting program...');
          process.exit(1);
        default:
          console.log('Error! Select between 1, 2, and 3. Exiting...')
          break;
    }
} while (option <= 3);
