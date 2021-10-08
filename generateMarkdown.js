// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// TODO: Create a function to generate markdown for README (Table of Contents)
function generateMarkdown(data) {
  return ` 
  
# ${data.title}

## License for Project:
The license ${data.license} was used for the following project

## Table of Contents:
* [Description](#description)

* [Installation](#installation)

* [Usage](#usage)

* [Contributed](#contributed)

* [Learned](#learn)

* [Final-Thoughts](#thoughts)

* [Questions?](#email)



# Description:
${data.description}

# How to install the project:
${data.installation}

# How to use this project:
${data.usage}

# Who contributed to this project:
${data.contributed}

# What I learned after building this project:
${data.learn}

# My final thoughts:
${data.thoughts}

## Contact Info:
If you have any questions for me, my email is ${data.email}, and my github username is ${data.username} !

`;
}

module.exports = generateMarkdown;
