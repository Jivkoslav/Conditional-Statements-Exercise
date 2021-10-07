function celsius(input) {
    let degrees = Number(input[0]);
    let newDegrees = ((degrees / 5) * 9) + 32;
    console.log(newDegrees.toFixed(2));
}
celsius(['25'])