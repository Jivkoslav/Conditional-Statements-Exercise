function depositCalc(input) {
    let deposit = Number(input[0]);
    let dueDate = Number(input[1]);
    let yearCharge = Number(input[2]);

    let yearInterest = yearCharge / 100;
    let interest = deposit * yearInterest;
    let monthInterest = interest / 12;

    let yearSum = deposit + (dueDate * monthInterest);
    console.log(yearSum);

}
depositCalc(["200", "3", "5.7"]);