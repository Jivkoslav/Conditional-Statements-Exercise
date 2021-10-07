function toyShop(input) {
    let holidayPrice = Number(input[0]);
    let puzzleNumber = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);

    let puzzlePrice = puzzleNumber * 2.60;
    let dollPrice = talkingDolls * 3;
    let bearPrice = teddyBears * 4.10;
    let minionPrice = minionsNumber * 8.20;
    let truckPrice = trucksNumber * 2;

    let toysPrice = puzzlePrice + dollPrice + bearPrice + minionPrice + truckPrice;
    let toysNumber = puzzleNumber + talkingDolls + teddyBears + minionsNumber + trucksNumber;

    if (toysNumber >= 50) {
        toysPrice = toysPrice - (toysPrice * 0.25);
    }

    let rent = toysPrice * 0.10;
    let finalPrice = toysPrice - rent;

    if (finalPrice >= holidayPrice) {
        console.log(`Yes! ${(finalPrice - holidayPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(holidayPrice - finalPrice).toFixed(2)} lv needed. `);
    }

}

toyShop(["320", "8", "2", "5", "5", "1"])