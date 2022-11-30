const fs = require('fs');
const UserDataService = require('../services/user-data-service')
const ScoreCalculatorService = require('../services/score-calculator-service')
const CsvTransformerService = require('../services/csv-transformer-service')

const ScoreHandlerService = {
  async handleScore(score) {
    const userData = await UserDataService.retrieveUserData();

    if (!userData.gender || !userData.dob || !userData.dob.age) {
      throw new Error("Missing mandatory params from api")
    }
    userData.SuperHeroTestScore = score

    const invisibilityScore = await ScoreCalculatorService.calculateInvisibilityScore(userData.gender, score, userData.dob.age);
    userData.InvisibilityScore = invisibilityScore

    const invisibilityStatus = await ScoreCalculatorService.determineInvisibilityStatus(invisibilityScore)
    userData.InvisibilityStatus = invisibilityStatus

    const csv = CsvTransformerService.convertJsonToCsv(userData);

    const csvLocation = `${userData.name.first + userData.name.last}.csv`;
    fs.writeFile(csvLocation, csv, function (err) {
      if (err) {
        console.log('Some error occurred - file either not saved or corrupted file saved.' + err);
        throw new Error('Some error occurred - file either not saved or corrupted file saved.' + err);
      } else{
        console.log('CSV generated and saved in location:' + csvLocation);
      }
    });
  }
}

module.exports = ScoreHandlerService
