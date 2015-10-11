# periscope-participant-colors
[![Build Status](https://travis-ci.org/vjo/periscope-participant-colors.svg)](https://travis-ci.org/vjo/periscope-participant-colors) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Code Climate](https://codeclimate.com/github/vjo/periscope-participant-colors/badges/gpa.svg)](https://codeclimate.com/github/vjo/periscope-participant-colors)
[![Test Coverage](https://codeclimate.com/github/vjo/periscope-participant-colors/badges/coverage.svg)](https://codeclimate.com/github/vjo/periscope-participant-colors/coverage)
Simple module to get a periscope participant color

## Install
```shell
npm install periscope-participant-colors --save
```

## Usage
```javascript
var participantColors = require('periscope-participant-color');

var participantIndex = 20;
var color = participantColors(participantIndex);
/*
{
    name: "Teal",
    RGB: "rgb(94, 213, 177)",
    hex: "#5ed5b1"
}
*/

var orange = participantColors.orange;
/*
{
    name: "Orange",
    RGB: "rgb(245, 166, 35)",
    hex: "#f5a623"
}
*/
```
