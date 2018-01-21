
const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplyBy: 2,
  showAns() {
    let newNumbers = this.numbers.map((no) => no * this.multiplyBy);
    return newNumbers;
  }
};

console.log(multiplier.showAns());