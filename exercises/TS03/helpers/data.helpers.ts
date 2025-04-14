export function getBiggestNumber(values: number[]): number {
    let largest = values[0];

    for (let index = 0; index < values.length; index++) {
        if (values[index] > largest) {
            largest = values[index];
        }
    }
    
    return largest;
}

export function getBiggestNumber2(values: number[]): number {

    console.log(values);
    console.log(...values);

    return Math.max(...values);
}