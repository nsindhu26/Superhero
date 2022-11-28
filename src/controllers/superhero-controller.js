const postScore = ((req, res) => {
  const score = req.body.score;

  res.send({
    message: 'Score submitted',
    score: score
  });
})

module.exports = {
  postScore
}
