const UserDataService = require('../services/user-data-service')

const ScoreHandlerService = {
  async handleScore() {
    const userData = await UserDataService.retrieveUserData();

    console.log(userData);
  }
}

module.exports = ScoreHandlerService
