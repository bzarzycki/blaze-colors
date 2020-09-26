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
    function randomChannelValue() {
        return Math.round(BlazeColors.BYTE_MAX * Math.random());
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
    function euclideanDistance(color1, color2) {
        var dRed = color1.red - color2.red;
        var dGreen = color1.green - color2.green;
        var dBlue = color1.blue - color2.blue;
        return Math.sqrt(Math.pow(dRed, 2) + Math.pow(dGreen, 2) + Math.pow(dBlue, 2));
    }
    BlazeColors.euclideanDistance = euclideanDistance;
    function toStringRGB(color) {
        return "rgb(" + color.red + ", " + color.green + ", " + color.blue + ")";
    }
    BlazeColors.toStringRGB = toStringRGB;
    function randomColor() {
        return {
            red: randomChannelValue(),
            green: randomChannelValue(),
            blue: randomChannelValue()
        };
    }
    BlazeColors.randomColor = randomColor;
})(BlazeColors || (BlazeColors = {}));
