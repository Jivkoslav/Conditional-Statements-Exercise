function foodDelivery(input) {
    let chicken = Number(input[0]);
    let fish = Number(input[1]);
    let veggie = Number(input[2]);
    let chickenMenu = chicken * 10.35;
    let fishMenu = fish * 12.40;
    let veggieMenu = veggie * 8.15;

    let menuSum = chickenMenu + fishMenu + veggieMenu;
    let desert = menuSum * 0.2;

    let totalSum = menuSum + desert + 2.50;
    console.log(totalSum);


}
foodDelivery(["2", "4", "3"]);