const generateLogo = require('./generateLogo');

describe('generateLogo function', () => {
it('should generate a circle logo with text', () => {
      const shapeColor = 'blue';
      const textColor = 'white';
      const shape = 'circle';
      const text = 'Logo Text';

      const result = generateLogo(shapeColor, textColor, shape, text);

      expect(result.includes('<circle')).toBe(true);
      expect(result.includes('<text')).toBe(true);
});

it('should generate a square logo without text', () => {
      const shapeColor = 'green';
      const textColor = 'black';
      const shape = 'square';
      const text = '';

      const result = generateLogo(shapeColor, textColor, shape, text);

      expect(result.includes('<rect')).toBe(true);
      expect(result.includes('<text')).toBe(false);
});

it('should generate a triangle logo with text', () => {
      const shapeColor = 'yellow';
      const textColor = 'black';
      const shape = 'triangle';
      const text = 'Company';

      const result = generateLogo(shapeColor, textColor, shape, text);

      expect(result.includes('<polygon')).toBe(true);
      expect(result.includes('<text')).toBe(true);
});

it('should handle invalid shape', () => {
      const shapeColor = 'red';
      const textColor = 'white';
      const shape = 'invalid';
      const text = 'Invalid Shape';

      const result = generateLogo(shapeColor, textColor, shape, text);

      expect(result).toBe('');
});
});
