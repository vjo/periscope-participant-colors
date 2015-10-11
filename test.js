'use strict';

var tap = require('tap');
var participantColors = require('./index');

var brown = {
    name: "Brown",
    RGB: "rgb(146, 100, 62)",
    hex: "#92643e"
};

var orange = {
    name: "Orange",
    RGB: "rgb(245, 166, 35)",
    hex: "#f5a623"
};

tap.equal(participantColors(6).name, 'Yellow', 'should return Yellow');

tap.deepEqual(participantColors(48), brown, 'should return the brown object');

tap.deepEqual(participantColors.orange, orange, 'should return the orange object');

try {
    participantColors('not a number');
    tap.bailout('should throw an error when not called with a number');
} catch(err) {
    tap.ok('should throw an error when not called with a number');
}

try {
    participantColors(-1);
    tap.bailout('should throw an error when called with a negative number');
} catch(err) {
    tap.ok('should throw an error when called with a negative number');
}
