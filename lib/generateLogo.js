// logoGenerator.js

// Function to generate the SVG logo based on user input
function generateLogo(shapeColor,textColor, shape, text) {
    let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">`;

if (shape === 'circle') {
    svg += `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
} else if (shape === 'square') {
    svg += `<rect x="50" y="50" width="200" height="200" fill="${shapeColor}" />`;
} else if (shape === 'triangle') {
    svg += `<polygon points="150,20 250,180 50,180" fill="${shapeColor}" />`;
} else {
    console.error('Invalid shape.');
    return '';
}

if (text.length > 0) {
    svg += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${textColor}">${text}</text>`;
}

svg += `</svg>`;

return svg;
}

module.exports = generateLogo; 