function bubblesTest() {
  let scores = [
    60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69,
    64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,
  ];
  let output;
  let testNumbers = scores.length;
  let highestScore = 0;
  let hiScoreIndeces = "";
  let hiScoreIndex;

  let i = 0;
  while (i < scores.length) {
      output = "Bubble solution #" + i + " score:" + scores[i];
      console.log(output);
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      hiScoreIndex = "#" + i;
    }
    if (scores[i] == highestScore) {
        hiScoreIndeces += hiScoreIndex;
        
    }
    i++;
  }
  console.log(`Bubbles test: ${testNumbers}`);
  console.log("Highest bublle score: " + highestScore);
  console.log("Solutions with highest score: " + hiScoreIndeces);
}
bubblesTest();
