function petShop(input) {
    let foodDogs = Number(input[0]);
    let foodCats = Number(input[1]);
    let total = (foodDogs * 2.50) + (foodCats * 4);
    console.log(total);
}
petShop(["13", "9"]);