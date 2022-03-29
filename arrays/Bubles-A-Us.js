function bubblesTest() {
  let scores = [
    60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
    64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
  ];
  let output;
  let testNumbers = scores.length;
  let highestScore = 0;

  for (let i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score:" + scores[i];
    console.log(output);
    if (scores[i] > highestScore) {
      highestScore = scores[i];
    }
  }
  console.log(`Bubbles test: ${testNumbers}`);
  console.log("Highest bublle score: " + highestScore);

  let hiScoreIndeces = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highestScore) {
      hiScoreIndeces.push(i);
    }
  }
  console.log("Solutions with highest score: " + hiScoreIndeces);
}
bubblesTest();
