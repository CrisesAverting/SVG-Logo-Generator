const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateSVG = require("./lib/generateSVG.js")

const questions = [{
    type: 'input',
    name: 'logo_text',
    message: 'Enter the text that will appear on the logo',
},
{
    type: 'input',
    name: 'logo_text_color',
    message: 'Enter the color in hex or keyword format for the text ',
},
{
    type: 'list',
    name: 'logo_shape',
    message: 'Select the shape in from the below list',
    choices: ["Triangle", "Circle", "Square"],
},
{
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the color in hex or keyword format for the logo shape',

},];
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Your SVG logo has been generated with your specifications")
    );
}

// TODO: Create a function to initialize app
function init() {
    // request user specifications with inquirer
    inquirer.prompt(questions).then((specs) => {
        writeToFile("./Logo.svg", generateSVG(specs));
        console.log(specs)
    });
}


// Function call to initialize app
init();