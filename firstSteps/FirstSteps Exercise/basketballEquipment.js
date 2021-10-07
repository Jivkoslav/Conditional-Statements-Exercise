function basketballEquipment(input) {
    let yearTax = Number(input[0]);
    let shoes = yearTax - (yearTax * (40 / 100));
    let clothes = shoes - (shoes * (20 / 100));
    let ball = clothes * 0.25;
    let accessories = ball * 0.2;
    let sum = yearTax + shoes + clothes + ball + accessories;

    console.log(sum);
}

basketballEquipment(["550"]);