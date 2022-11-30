const createCsvWriter = require('csv-writer').createObjectCsvStringifier;

const CsvTransformerService = {
  convertJsonToCsv(json) {
    if (!Array.isArray(json)) {
      json = [ json ]
    }

    const csvHeaderArray = Object.keys(json[0]).map(k => ({ id: k, title: k }));
    console.log(csvHeaderArray);

    const csvStringifier = createCsvWriter({ header: csvHeaderArray });
    console.log(csvStringifier)

    const csv = `${csvStringifier.getHeaderString()}${csvStringifier.stringifyRecords(json)}`;
    console.log(csv)

    return csv;
  }
}

module.exports = CsvTransformerService
