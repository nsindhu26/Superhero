const maleGenderWeighting = 5;
const femaleGenderWeighting = 8;

const ScoreCalculatorService = {
  async calculateInvisibilityScore(gender, superHeroTestScore, age) {
    const genderWeighting = gender == 'male' ? maleGenderWeighting : femaleGenderWeighting;

    const invisibilityScore = genderWeighting * (superHeroTestScore - age);
    const normalizedScore = normalize(invisibilityScore);

    return normalizedScore;
  },

  async determineInvisibilityStatus(normalizedInvisibilityScore) {
    if(normalizedInvisibilityScore >= 0 && normalizedInvisibilityScore <= 20 )
      return 'Not invisible'
    else if (normalizedInvisibilityScore >= 21 && normalizedInvisibilityScore <= 40)
      return 'Camouflage'
    else if (normalizedInvisibilityScore >= 41 && normalizedInvisibilityScore <= 60)
      return 'Translucent'
    else if (normalizedInvisibilityScore >= 61 && normalizedInvisibilityScore <= 80)
      return 'Transparent'
    else if (normalizedInvisibilityScore >= 81 && normalizedInvisibilityScore <= 100)
      return 'Invisible'
    else
      throw Error("Invalid normalized invisibility score: " + normalizedInvisibilityScore)
  }
}

function normalize (val) {
  if (val < 0)
    return (Math.abs(val)/800*50).toFixed(0);
  else
    return ((Math.abs(val)/800*50) + 50).toFixed(0);
}

module.exports = ScoreCalculatorService
