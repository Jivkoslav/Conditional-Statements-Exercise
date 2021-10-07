function godzillaVsKong(input) {
    let budgetMovie = Number(input[0]);
    let statisticsNumber = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decorPrice = budgetMovie * 0.10;
    let clothesNewPrice = statisticsNumber * clothesPrice;
    let moviePrice = clothesNewPrice + decorPrice;

    if (statisticsNumber > 150) {
        clothesNewPrice = clothesNewPrice - (clothesNewPrice / 10).toFixed(2);
        moviePrice = clothesNewPrice + decorPrice;
    }


    if (moviePrice > budgetMovie) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moviePrice - budgetMovie).toFixed(2)} leva more.`);
    } else if (moviePrice <= budgetMovie) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budgetMovie - moviePrice).toFixed(2)} leva left.`)
    }



}

godzillaVsKong(["15437.62", "186", "57.99"])