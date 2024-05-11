class ListParameters {
  generateListLengthLimit(targetPosition: number) {
    const growthFactor = targetPosition.toString().length;
    return parseInt(`1`.padEnd(growthFactor));
  }
}

module.exports = ListParameters;
