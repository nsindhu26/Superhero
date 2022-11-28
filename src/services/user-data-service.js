const axios = require('axios');

const getUserDataUrl = 'https://randomuser.me/api';

const UserDataService = {

  async retrieveUserData() {
    try {
      const response = await axios({
        method: 'GET',
        url: getUserDataUrl,
        headers: {
          'Accept-Encoding': 'application/json',
        },
      });

      return response.data;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserDataService;
