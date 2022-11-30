const ScoreHandlerService = require('../../src/services/score-handler-service')
const UserDataService = require('../../src/services/user-data-service')
const ScoreCalculatorService = require('../../src/services/score-calculator-service')
const CsvTransformerService = require('../../src/services/csv-transformer-service')
const fs = require('fs');

jest.mock('fs', () => ({
  writeFile: jest.fn(),
}));

describe('score-handler-service', () => {

  describe('handleScore', () => {

    test('throws error when mandatory user data not available', async () => {
      jest.spyOn(UserDataService, 'retrieveUserData').mockResolvedValueOnce({});

      await expect(ScoreHandlerService.handleScore(50)).rejects.toThrow(new Error('Missing mandatory params from api'));
    });

    test('saves csv successfully', async () => {
      const userData = {
        gender: 'female',
        name: {
          first: 'firstname',
          last: 'lastname',
        },
        dob: {
          age: '66',
        }
      };
      jest.spyOn(UserDataService, 'retrieveUserData').mockResolvedValueOnce(userData);
      jest.spyOn(ScoreCalculatorService, 'calculateInvisibilityScore').mockResolvedValueOnce(8);
      jest.spyOn(ScoreCalculatorService, 'determineInvisibilityStatus').mockResolvedValueOnce('Not Invisible');
      jest.spyOn(CsvTransformerService, 'convertJsonToCsv').mockReturnValueOnce('data1,data2\ndataval1,dataval2');

      await ScoreHandlerService.handleScore(50);

      expect(UserDataService.retrieveUserData).toHaveBeenCalledTimes(1)
      expect(ScoreCalculatorService.calculateInvisibilityScore).toHaveBeenCalledTimes(1)
      expect(ScoreCalculatorService.determineInvisibilityStatus).toHaveBeenCalledTimes(1)
      expect(CsvTransformerService.convertJsonToCsv).toHaveBeenCalledTimes(1)
      expect(fs.writeFile).toHaveBeenCalledTimes(1)
    });
  });
});
