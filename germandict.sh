#!/bin/bash

echo "Willkommen!"

echo "Select an option of translation 1) English to German 2) Deutsch nach Englisch or 3) Exit" 
select option in "English to German" "German to English" "Exit"
do
    case $option in
    "English to German")
        read -p "Enter a word to translate to German: " word

        curl "dict.org/d:$word:fd-eng-deu"
        ;;
    "German to English")
        read -p "Enter a word to translate to English: " word

        curl "dict.org/d:$word:fd-deu-eng"
        ;;
    "Exit")
        echo "Exiting program..."
        exit 1;;
    *)
        echo "Error! Select between 1, 2, and 3. Exiting...";;
    esac
done

