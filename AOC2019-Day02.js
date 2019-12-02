const intArray = '1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,6,19,1,9,19,23,2,23,10,27,1,27,5,31,1,31,6,35,1,6,35,39,2,39,13,43,1,9,43,47,2,9,47,51,1,51,6,55,2,55,10,59,1,59,5,63,2,10,63,67,2,9,67,71,1,71,5,75,2,10,75,79,1,79,6,83,2,10,83,87,1,5,87,91,2,9,91,95,1,95,5,99,1,99,2,103,1,103,13,0,99,2,14,0,0'.split(',').map(Number);


const restoreGravityAssist = (instructions, noun, verb) => {
    const HALT = 99;
    const ADD = 1;
    const MULTIPLY = 2;
    const MESSAGE_LENGTH = 4;
    const arr = [].concat(instructions);

    arr[1] = noun;
    arr[2] = verb;

    if (arr && arr.length > MESSAGE_LENGTH) {
        for (let i = 0; i < i < arr.length; i = i + MESSAGE_LENGTH) {
            let operation = arr[i];
            let operatorLeft = arr[instructions[i + 1]];
            let operatorRight = arr[instructions[i + 2]];

            if (operation === HALT) {
                return arr[0];
            }

            if (operation === ADD) {
                arr[arr[i + 3]] = operatorLeft + operatorRight;
            } else if (operation === MULTIPLY) {
                arr[arr[i + 3]] = operatorLeft * operatorRight;
            }
        }
    }
}

let noun = 0;
let verb = 0;

while(noun <= 90){
    if(restoreGravityAssist(intArray,noun,verb) >= 19690720){
        noun--;
        break;
    }
    noun++;
}

while(verb <= 90){
    if(restoreGravityAssist(intArray,noun,verb) === 19690720){
        break;
    }
    verb++;
}

console.log('value: ', 100*noun + verb);