'use strict';

var PARTICIPANT_COLORS = [{
    name: "Orange",
    RGB: "rgb(245, 166, 35)",
    hex: "#f5a623"
}, {
    name: "Purple",
    RGB: "rgb(171, 112, 212)",
    hex: "#ab70d4"
}, {
    name: "Green",
    RGB: "rgb(153, 206, 98)",
    hex: "#99ce62"
}, {
    name: "Periwinkle",
    RGB: "rgb(92, 117, 220)",
    hex: "#5c75dc"
}, {
    name: "Red",
    RGB: "rgb(213, 77, 129)",
    hex: "#d54d81"
}, {
    name: "Yellow",
    RGB: "rgb(222, 213, 105)",
    hex: "#ded569"
}, {
    name: "Teal",
    RGB: "rgb(94, 213, 177)",
    hex: "#5ed5b1"
}, {
    name: "Pink",
    RGB: "rgb(230, 151, 220)",
    hex: "#e697dc"
}, {
    name: "Brown",
    RGB: "rgb(146, 100, 62)",
    hex: "#92643e"
}, {
    name: "VividTangerine",
    RGB: "rgb(255, 169, 138)",
    hex: "#ffa98a"
}, {
    name: "SkyBlue",
    RGB: "rgb(132, 225, 235)",
    hex: "#84e1eb"
}, {
    name: "Fern",
    RGB: "rgb(105, 171, 99)",
    hex: "#69ab63"
}, {
    name: "Carnation",
    RGB: "rgb(248, 91, 91)",
    hex: "#f85b5b"
}];

var PeristreamParticipantColor = function PeristreamParticipantColor(index){
    return PARTICIPANT_COLORS[(index - 1) % PARTICIPANT_COLORS.length];
};

PARTICIPANT_COLORS.forEach(function(color){
    PeristreamParticipantColor[color.name.toLowerCase()] = color;
});

module.exports = PeristreamParticipantColor;
