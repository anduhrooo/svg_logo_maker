const Shapes = require('./shapes')
const Colors = require('./colors')

// A testing suite for Shapes is created.
describe('Shapes', () => {
      it('should be a square, triangle, or circle', () => {
            const validShapes = ['square', 'triangle', 'circle'];
            expect(validShapes).toContain(Shapes);
      });
      });

      
describe('Colors', () => {
      it('should be a recognizable color or hex code', () => {
            const hexSymbol = '#'
            expect(Colors).toContain(hexSymbol)
      })
      
})     


