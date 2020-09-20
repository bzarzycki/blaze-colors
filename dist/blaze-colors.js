"use strict";
var BlazeColors;
(function (BlazeColors) {
    BlazeColors.BYTE_MAX = 255;
    function toHash(val) {
        var hash = val.toString(16);
        if (hash.length === 1) {
            hash = '0' + hash;
        }
        return hash;
    }
    function mixChannels(c1, c2, weight) {
        return Math.round(c2 + weight * (c1 - c2));
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
        return "#" + toHash(color.red) + toHash(color.green) + toHash(color.blue);
    }
    BlazeColors.toHashCode = toHashCode;
    function invert(color) {
        return {
            red: BlazeColors.BYTE_MAX - color.red,
            green: BlazeColors.BYTE_MAX - color.green,
            blue: BlazeColors.BYTE_MAX - color.blue
        };
    }
    BlazeColors.invert = invert;
})(BlazeColors || (BlazeColors = {}));
