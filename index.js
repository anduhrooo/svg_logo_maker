const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const { generateLogo } = require('./lib/generateLogo');

inquirer
    .prompt([
        {
            type: "input",
            message: colors.magenta("What text would you like for your logo (up to 3 characters)?"),
            name: "text",
        },
        {
            type: "input",
            message: colors.magenta("What color would you like your logo text?"),
            name: "textColor",
        },
        {
            type: "list",
            message: colors.magenta("What shape would you like your logo?"),
            name: "shape",
            choices: ['circle', 'triangle', 'square']   
        },
        {
            type: "input",
            message: colors.magenta("What color would you like your shape?"),
            name: "shapeColor",
        }
    ])
    .then((response) => {
        
        console.log("Text:", response.text);
        console.log("Text Color:", response.textColor);
        console.log("Shape:", response.shape);
        console.log("Shape Color:", response.shapeColor);
        const generateSVG = generateLogo(response.shapeColor, response.textColor, response.shape, response.text);

        fs.writeFile(`./svgOutput/${response.text}.svg`, generateSVG, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Generated ${response.text}.svg`);
            }
        });
    });