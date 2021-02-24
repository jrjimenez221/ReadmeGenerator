const inquirer = require('inquirer');
const fs = require('fs');

function begin() {
    console.log("Thanks for using this readme generator. Output will be located in the new 'generatedReadMe.md' or will overwrite if existing. Therefore it's advised to rename or relocate file after use.")
    return inquirer.prompt([
        {
            type: "input",
            message: "Project title?",
            name: "title"
        },
        {
            type: "input",
            message: "Give a description.",
            name: "desc"
        },
        {
            type: "confirm",
            message: "Table of Contents?",
            name: "tabcont"
        },
        {
            type: "input",
            message: "Installation instructions?",
            name: "install"
        },
        {
            type: "input",
            message: "What's this application for?",
            name: "usage"
        },
        {
            type: "list",
            message: "Liscensing? More info at choosealicense.com",
            name: "lisc",
            choices: ["Mit", "GNU GPLv3", "GNU AGPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "Boost Software License 1.0", "The Unlicense"]
        },
        {
            type: "input",
            message: "Contributors?",
            name: "contr"
        }
    ])
    .then( re => {
        const ToC = `

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)        
        `
        if (re.tabcont === true){
            Table = ToC
        }
        else (Table = ``);

        const output = 
`
# ${re.title}
## Description
${re.desc}
${Table}

## Installation
${re.install}

## Usage
${re.usage}

## Liscencing: ${re.lisc}  
More info at [choosealicense.com](https://www.choosealicense.com)

## Contributors
${re.contr}

`
        create(output)
    })
};
function create(x) {
    fs.writeFile('generatedReadMe.md', x, (err) => {
        if (err) throw err;
            
        
    })
};


begin();
