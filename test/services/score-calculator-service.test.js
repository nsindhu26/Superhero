const ScoreCalculatorService = require('../../src/services/score-calculator-service')

describe('score-calculator-service', () => {

  describe('calculateInvisibilityScore', () => {

    test('calculate male score successfully', async () => {
      const invisibilityScore = await ScoreCalculatorService.calculateInvisibilityScore('male', 20, 70);

      expect(invisibilityScore).toEqual("16");
    });

    test('calculate female score successfully', async () => {
      const invisibilityScore = await ScoreCalculatorService.calculateInvisibilityScore('female', 20, 70);

      expect(invisibilityScore).toEqual("25");
    });

    test('calculate male score successfully p', async () => {
      const invisibilityScore = await ScoreCalculatorService.calculateInvisibilityScore('male', 80, 30);

      expect(invisibilityScore).toEqual("66");
    });

    test('calculate female score successfully p', async () => {
      const invisibilityScore = await ScoreCalculatorService.calculateInvisibilityScore('female', 80, 30);

      expect(invisibilityScore).toEqual("75");
    });
  });

  describe('determineInvisibilityStatus', () => {

    test('determine valid invisibility status', async () => {
      const invisibilityStatus = await ScoreCalculatorService.determineInvisibilityStatus(50);

      expect(invisibilityStatus).toEqual("Translucent");
    });

    test('invalid invisibility score throws error', async () => {
      await expect(ScoreCalculatorService.determineInvisibilityStatus(101)).rejects.toThrow(new Error('Invalid normalized invisibility score: 101'));
    });
  });
})
