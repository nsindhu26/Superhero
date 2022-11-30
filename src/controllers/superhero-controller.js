const ScoreHandlerService = require('../services/score-handler-service')

const postScore = (async (req, res) => {
  const score = req.body.score;

  const csvFile = await ScoreHandlerService.handleScore(score);

  res.send({
    message: 'Score submitted and CSV created',
    csvFile: csvFile,
  });
})

module.exports = {
  postScore
}
