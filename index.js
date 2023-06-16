const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateSVG = require("./lib/generateSVG.js")
//check that the logo text length is not more than 3 character and more than 0 characters
const checkLength = (text) => {
    if (text.length > 0 && text.length < 4) {
        return true;
    }
    return "Logo text cannot be 0 characters and cannot be more than 3 charaters"
}
//Check that the color string is not empty
const checkColor = (color) => {
    if (color !== "") {
        return true;
    }
    return "Please enter a valid color"
}
//collects user specifications using inquirer
const questions = [{
    type: 'input',
    name: 'logo_text',
    message: 'Enter the text that will appear on the logo',
    validate: checkLength
},
{
    type: 'input',
    name: 'logo_text_color',
    message: 'Enter the color in hex or keyword format for the text ',
  validate: checkColor
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
    // validate: checkColor

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
        writeToFile("./logo.svg", generateSVG(specs));
        // console.log(specs)
    });
}


// Function call to initialize app
init();