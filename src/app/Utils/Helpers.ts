export class Helpers {

    // remove all character which are not a number, dot or comma
    static cleanNonNumeric(input: string): string {
        let pattern = /[^\d.,]/g;
        const result = input.replace(pattern, ' ');
        return result;
    }

    static toCentimeters(input: string): number {
        const cleanedInput = input.trim();
        if (cleanedInput === null || cleanedInput === undefined || cleanedInput === '') {
            return null;
        }
        
        // does not contain a dot or a comma
        if (cleanedInput.indexOf('.') < 0 && cleanedInput.indexOf(',') < 0) {
            return +cleanedInput;
        }

        let splitted = cleanedInput.split('.');
        if (splitted.length === 1) {
            splitted = cleanedInput.split(',');
        }

        let newValue = splitted[0];
        if (splitted.length > 1) {
            newValue += Helpers.pad('00', splitted[1], false);
        }

        return +newValue;
    }

    private static pad(pad: string, value: string, padLeft: boolean): string {
        if (typeof value === 'undefined') 
          return pad;
        if (padLeft) {
          return (pad + value).slice(-pad.length);
        } else {
          return (value + pad).substring(0, pad.length);
        }
    }
}