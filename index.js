const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Please enter any three characters',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape would you like to have?',
        choices: ['Circle', 'Square', 'Triangle'],
        name: 'shapeChoice'
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shapeColor'
    }
];

inquirer.prompt(questions).then((responses) => {
    console.log(responses);


    writeToFile('logo.svg', responses);
})

function writeToFile(fileName, data) {
    console.log(data)

    if (data.text.split("").length != 3) {
        return null;
    }

    let newShape;

    if (data.shapeChoice === 'Triangle') {
        newShape = new Triangle(data.shapeColor, data.text, data.textColor)
    } 
    if (data.shapeChoice === 'Circle') {
        newShape = new Circle(data.shapeColor, data.text, data.textColor)
    }
    if (data.shapeChoice === 'Square') {
        newShape = new Square(data.shapeColor, data.text, data.textColor)
    }

    fs.writeFile(fileName, newShape.generateSVG(), (err) => (
        err ? console.error(err) : console.log('Successfully created logo.svg')
    ));
}