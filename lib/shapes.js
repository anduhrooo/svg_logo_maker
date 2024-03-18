class Shapes {
    constructor(type){
        this.type = type;
    }
    displayInfo() {
        console.log('this is a ' + this.shape);
    }
}

const firstShape = new Shapes('square')

module.exports = Shapes