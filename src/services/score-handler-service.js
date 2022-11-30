const UserDataService = require('../services/user-data-service')
const ScoreCalculatorService = require('../services/score-calculator-service')

const ScoreHandlerService = {
  async handleScore(score) {
    const userData = await UserDataService.retrieveUserData();

    const invisibilityScore = await ScoreCalculatorService.calculateInvisibilityScore(userData.gender, score, userData.dob.age);

    const invisibilityStatus = await ScoreCalculatorService.determineInvisibilityStatus(invisibilityScore)
  }
}

module.exports = ScoreHandlerService
