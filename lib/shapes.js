class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }

    generateSVG() {
        return '';
    }

    setColor(newColor) {
        this.shapeColor = newColor;
    }

    render() {
        return this.generateSVG();
    }
}

class Triangle extends Shape {
    generateSVG() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"></polygon>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Circle extends Shape {
    generateSVG() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"></circle>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

class Square extends Shape {
    generateSVG() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}"></rect>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`;
    }
}

module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
};