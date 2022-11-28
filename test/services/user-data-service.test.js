const axios = require('axios');
const UserDataService = require('../../src/services/user-data-service')

jest.mock('axios', () => jest.fn());

describe('user-data-service', () => {

  describe('retrieveUserData', () => {

    test('retrieves single user data successfully', async () => {
      axios.mockImplementation(() => ({data: 'data'}));

      const userData = await UserDataService.retrieveUserData();

      expect(axios).toHaveBeenCalledWith({
        method: 'GET',
        url: 'https://randomuser.me/api',
        headers: {
          'Accept-Encoding': 'application/json',
        },
      });
      expect(userData).toEqual('data')
    });

    test('throws error when error retrieving data', async () => {
      axios.mockRejectedValueOnce(new Error('error'));

      await expect(UserDataService.retrieveUserData()).rejects.toThrow('error');
      expect(axios).toHaveBeenCalledWith({
        method: 'GET',
        url: 'https://randomuser.me/api',
        headers: {
          'Accept-Encoding': 'application/json',
        },
      });
    });
  });
})
