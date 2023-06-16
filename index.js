const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateSVG = require("./lib/generateSVG.js")
const check_length = (text) => {
    if (text.length > 0 && text.length<4  ) {
        return true
    }
    return "Logo text cannot be 0 characters and cannot be more than 3 charaters"
}

const check_color = (color) => {
    if (color!== ""){
        return true;
    }
    return "Please enter a valid color"
}

const questions = [{
    type: 'input',
    name: 'logo_text',
    message: 'Enter the text that will appear on the logo',
    validate: check_length,
},
{
    type: 'input',
    name: 'logo_text_color',
    message: 'Enter the color in hex or keyword format for the text ',
    validate: check_color,
},
{
    type: 'list',
    name: 'logo_shape',
    message: 'Select the shape in from the below list',
    choices: ["Triangle", "Circle", "Square"],
},
{
    type: 'input',
    name: 'shape_color',
    message: 'Enter the color in hex or keyword format for the logo shape',
    validate: check_color,

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
        console.log(specs)
        writeToFile("./Logo.svg", generateSVG(specs));
        // console.log(specs)
    });
}


// Function call to initialize app
init();