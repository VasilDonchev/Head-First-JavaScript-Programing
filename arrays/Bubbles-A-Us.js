let scores = [
  60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
  64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
];
var costs = [
  0.25, 0.27, 0.25, 0.25, 0.25, 0.25, 0.33, 0.31, 0.25, 0.29, 0.27, 0.22, 0.31,
  0.25, 0.25, 0.33, 0.21, 0.25, 0.25, 0.25, 0.28, 0.25, 0.24, 0.22, 0.2, 0.25,
  0.3, 0.25, 0.24, 0.25, 0.25, 0.25, 0.27, 0.25, 0.26, 0.29,
];

function printAndGetHighScore(scores) {
  let highScore = 0;
  let output;

  for (let i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score:" + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
      highScore = scores[i];
    }
  }
  return highScore;
}

function getBestResults(arr, highestScore) {
  let hiScoreIndeces = [];
  for (let i = 0; i < arr.length; i++) {
    if (scores[i] == highestScore) {
      hiScoreIndeces.push(i);
    }
  }
  return hiScoreIndeces;
}

function getMostCostEffectiveSolution(scores, costs, bestSolutions) {
let cost = 100;
let index;
for (let i = 0; i < bestSolutions.length; i++){
  if (scores[bestSolutions[i]] < cost) {
    cost = scores[bestSolutions[i]];
    index = bestSolutions[i];
  }
}
return index;
}

let highScore = printAndGetHighScore(scores);
let bestSolutions = getBestResults(scores, highScore);
let mostCostEffective = getMostCostEffectiveSolution(scores, costs, bestSolutions);
console.log(`Bubbles test: ${scores.length}`);
console.log("Highest bublle score: " + highScore);
console.log("Solutions with highest score: " + bestSolutions);
console.log("Bubble Solution # " + mostCostEffective + " is the most cost effective");
