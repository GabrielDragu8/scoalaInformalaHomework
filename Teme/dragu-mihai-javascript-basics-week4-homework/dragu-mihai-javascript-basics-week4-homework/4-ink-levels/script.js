var  inkLevelsOne = {
  "cyan": 23,
  "magenta" : 12,
  "yellow" : 10
}; 

//printer will run out when the mininum number of pages goes to 0, so we have to return the smallest value

var printerOneRunsOut = Math.min(23, 12, 10);

console.log(printerOneRunsOut);

var inkLevelsTwo = {
  "cyan": 432,
  "magenta" : 543,
  "yellow" : 777
};

var printerTwoRunsOut = Math.min(432, 543, 777);
console.log(printerTwoRunsOut);

var inkLevelsThree ={
  "cyan": 700,
  "magenta" : 700,
  "yellow" : 0
};

var printerThreeRunsOut = Math.min(700, 700, 0);
console.log(printerThreeRunsOut);





