const SuperheroController =  require('../../src/controllers/superhero-controller');

describe('superhero-controller', () => {
  test('submit score method called successfully', async() => {
    const req = { body: { score: 67.7 } };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };

    await SuperheroController.postScore(req, res);

    expect(res.send).toBeCalledWith({"message": "Score submitted", "score": 67.7});
  });
})
