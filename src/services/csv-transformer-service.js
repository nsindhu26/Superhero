const jsonexport = require('jsonexport');

const CsvTransformerService = {
  convertJsonToCsv(json) {
    if (!Array.isArray(json)) {
      json = [ json ]
    }

    let csv;
    jsonexport(json, function(err, data){
      if (err) return console.error(err);
      csv = data;
    });

    return csv;
  }
}

module.exports = CsvTransformerService
