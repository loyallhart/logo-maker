const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./lib/shapes')

inquirer.prompt([

    {
        type: 'input',
        name: 'text',
        message: 'Text: Please enter up to 3 characters:',
        validate: async (input) => {
            if (input.length < 3) {
                return 'Please enter no more than 3 characters for your logo.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Text Color: Please enter the text color for your logo',
    },
    {     
        type: 'list',
        name: 'shape',
        message: 'Shape: Please choose the shape you want for your logo:',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Shape Color: Please enter the color you want your shape to be?',
    },

]).then(answers => {
  const { text, textColor, shape, shapeColor } = answers;

  let shapeLogo;
  switch (shape) {
    case 'circle':
      shapeLogo = new Circle(shapeColor);
      break;
    case 'square':
      shapeLogo = new Square(shapeColor);
      break;
    case 'triangle':
      shapeLogo = new Triangle(shapeColor);
      break;
    default:
      throw new Error('Invalid shape');
  }

  const svgContent = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shapeLogo.render()}
  <text x="150" y="125" font-size="55" font-family="Verdana" text-anchor="middle" fill='${textColor}'>${text}</text>
  </svg>
`;

  fs.writeFile('logo.svg', svgContent, (err) => {
    if (err) throw err;
    console.log('logo.svg created successfully!');
  });
});