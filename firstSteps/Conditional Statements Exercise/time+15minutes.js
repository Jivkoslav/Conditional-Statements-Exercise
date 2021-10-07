function timePlus(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMins = hours * 60 + minutes;

    timeInMins = timeInMins + 15;
    let h = Math.floor(timeInMins / 60);
    let m = timeInMins % 60;

    if (h >= 24) {
        h = 0;
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }

}
timePlus(["23", "5"]);