/**
 * 
*/


function TempTracker() {

    // for mode
    this.occurrences = [];  // array of 0s at indices 0..110
    for (var i = 0; i < 111; i++) {
        this.occurrences[i] = 0;
    }
    this.maxOccurrences = 0;
    this.mode = null;

    // for mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    // for min and max
    this.minTemp = null;
    this.maxTemp = null;
}

TempTracker.prototype.insert = function(temperature) {

    // for mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
        this.mode = temperature;
        this.maxOccurrences = this.occurrences[temperature];
    }

    // for mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;

    // for min and max
    if (this.maxTemp === null || temperature > this.maxTemp) {
        this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
        this.minTemp = temperature;
    }
};

TempTracker.prototype.getMax = function() {
    return this.maxTemp;
};

TempTracker.prototype.getMin = function() {
    return this.minTemp;
};

TempTracker.prototype.getMean = function() {
    return this.mean;
};

TempTracker.prototype.getMode = function() {
    return this.mode;
};