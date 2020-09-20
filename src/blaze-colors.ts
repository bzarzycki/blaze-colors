namespace BlazeColors {

    export const BYTE_MAX = 255;

    export interface Color {
        red: number;
        green: number;
        blue: number;
    }

    function toHash(val: number): string {
        let hash = val.toString(16);
        if (hash.length === 1) {
            hash = '0' + hash;
        }
        return hash;
    }

    function mixChannels(c1: number, c2: number, weight: number): number {
        return Math.round(c2 + weight * (c1 - c2));
    }

    export function mix(color1: Color, color2: Color, weight: number = 0.5): Color {
        return {
            red: mixChannels(color1.red, color2.red, weight),
            green: mixChannels(color1.green, color2.green, weight),
            blue: mixChannels(color1.blue, color2.blue, weight),
        }
    }

    export function toHashCode(color: Color): string {
        return "#" + toHash(color.red) + toHash(color.green) + toHash(color.blue);
    }

    export function invert(color: Color): Color {
        return {
            red: BYTE_MAX - color.red,
            green: BYTE_MAX - color.green,
            blue: BYTE_MAX - color.blue
        }
    }

}