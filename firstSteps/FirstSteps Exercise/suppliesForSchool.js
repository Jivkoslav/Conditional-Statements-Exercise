function suppliesSchool(input) {
    let pen = Number(input[0]);
    let sharpies = Number(input[1]);
    let chemical = Number(input[2]);
    let discounts = Number(input[3]);

    let pensPack = pen * 5.80;
    let sharpiesPack = sharpies * 7.20;
    let chemicalPack = chemical * 1.20;
    let discountAni = discounts / 100;
    let sum = pensPack + sharpiesPack + chemicalPack;
    let newSum = sum - (sum * discountAni);
    console.log(newSum);

}

suppliesSchool(["2", "3", "4", "25"])