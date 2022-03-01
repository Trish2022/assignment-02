// APPLICATION 2
// The Word Translator
// Create an application that prompts the user for a language code ("es", "de", "en", and "fr"). If they enter one of the four codes, display the translated version of "Hello World" for the given language within the console window. If the user enters anything but those four language codes, the application should default to English. The result should be (for example): Hello World translated in French is: Bonjour le monde

let langs= alert('Language code search application. Choose from: Spanish code: es; German code: de; English code: en; French code: fr.');

let lang = prompt("Enter the language code you are looking for");
switch (lang) {
case "es":
document.write("Hola Mundo.");
break;
case "de":
document.write("Hallo Welt.");
break;
case "en":
document.write("Hello World.");
break;
case "fr":
document.write("Bonjour le monde.");
break;
default:
document.write("Sorry that code isn't listed here.");
}
