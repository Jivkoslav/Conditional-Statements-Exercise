function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);

    let sumInSeconds = a + b + c;
    let timeInMin = Math.floor(sumInSeconds / 60);
    let timeInSec = sumInSeconds % 60;

    if (timeInSec < 10) {
        console.log(`${timeInMin}:0${timeInSec}`);
    } else {
        console.log(`${timeInMin}:${timeInSec}`);
    }
}

sumSeconds(['50', '50', '49']);