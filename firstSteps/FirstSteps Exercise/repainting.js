function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5;
    let bags = 0.40;

    let nylonSum = (nylon + 2) * nylonPrice;
    let paintSum = (paint + (paint * 0.1)) * paintPrice;
    let thinnerSum = thinner * thinnerPrice;

    let toolsSum = nylonSum + paintSum + thinnerSum + bags;
    let guysSum = (toolsSum * 0.3) * hours;
    let finalSumm = toolsSum + guysSum;
    console.log(finalSumm);


}

repainting(['10', '11', '4', '8'])