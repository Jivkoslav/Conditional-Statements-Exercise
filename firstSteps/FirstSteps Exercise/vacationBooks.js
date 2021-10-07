function vacationBooks(input) {
    let pagesInBook = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let time = pagesInBook / pages;
    let hours = time / 2;
    console.log(hours);
}

vacationBooks(["212", "20", "2"]);