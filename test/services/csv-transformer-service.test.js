const CsvTransformerService = require('../../src/services/csv-transformer-service')

describe('csv-transformer-service', () => {

  describe('convertJsonToCsv', () => {
    test('calculate male score successfully', async () => {
      const jsonData = {
        Id: "124",
        ID: "345",
        withComma: "this is, a sentence with comma",
        normalSentence: "this is a sentence",
      }

      const csv = CsvTransformerService.convertJsonToCsv(jsonData);

      expect(csv).toEqual('Id,ID,withComma,normalSentence\n124,345,"this is, a sentence with comma",this is a sentence\n');
    });
  });
})
