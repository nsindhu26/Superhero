const ScoreHandlerService = require('../services/score-handler-service')

const postScore = (async (req, res) => {
  const score = req.body.score;

  await ScoreHandlerService.handleScore();

  res.send({
    message: 'Score submitted',
    score: score
  });
})

module.exports = {
  postScore
}
