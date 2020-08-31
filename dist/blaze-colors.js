"use strict";
var BlazeColors;
(function (BlazeColors) {
    function toHash(val) {
        var hash = val.toString(16);
        if (hash.length === 1) {
            hash = '0' + hash;
        }
        return hash;
    }
    function mixChannels(c1, c2, weight) {
        return Math.round(c2 + (c1 - c2) * weight);
    }
    function mix(color1, color2, weight) {
        if (weight === void 0) { weight = 0.5; }
        return {
            red: mixChannels(color1.red, color2.red, weight),
            green: mixChannels(color1.green, color2.green, weight),
            blue: mixChannels(color1.blue, color2.blue, weight)
        };
    }
    BlazeColors.mix = mix;
    function toHashCode(color) {
        var r = toHash(color.red);
        var g = toHash(color.green);
        var b = toHash(color.blue);
        return "#" + r + g + b;
    }
    BlazeColors.toHashCode = toHashCode;
})(BlazeColors || (BlazeColors = {}));
