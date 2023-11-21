const {Triangle, Circle, Square} = require('./shapes.js')

describe('Shape', () => {
    test('should render a triangle with set color', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150, 18 244, 182 56, 182" fill="blue"></polygon>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    })
    test('should render a circle with set color', () => {
        const shape = new Circle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="80" fill="blue"></circle>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    })
    test('should render a square with set color', () => {
        const shape = new Square();
        shape.setColor('blue');
        expect(shape.render()).toEqual(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="90" y="40" width="120" height="120" fill="blue"></rect>
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`)
    });
});