const CsvTransformerService = require('../../src/services/csv-transformer-service')

describe('csv-transformer-service', () => {

  describe('convertJsonToCsv', () => {
    test('simple json with comma converted successfully', async () => {
      const jsonData = {
        Id: "124",
        ID: "345",
        withComma: "this is, a sentence with comma",
        normalSentence: "this is a sentence",
      }

      const csv = CsvTransformerService.convertJsonToCsv(jsonData);

      expect(csv).toEqual('Id,ID,withComma,normalSentence\n' +
        '124,345,"this is, a sentence with comma",this is a sentence');
    });

    test('nested json converted successfully', async () => {
      const jsonData = {
        Id: "124",
        ID: "345",
        sentence: {
          withComma: "this is, a sentence with comma",
          normalSentence: "this is a sentence",
        },
        arrays: [
          {
            array1: "arrayVal1"
          },
          {
            array2: "arrayVal1"
          }
        ]
      }

      const csv = CsvTransformerService.convertJsonToCsv(jsonData);

      expect(csv).toEqual('Id,ID,sentence.withComma,sentence.normalSentence,arrays.array1,arrays.array2\n' +
        '124,345,"this is, a sentence with comma",this is a sentence,arrayVal1,arrayVal1');
    });
  });
})
