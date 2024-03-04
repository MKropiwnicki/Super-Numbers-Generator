export const gridGenerator = (min, max) => {

    let numbersGrid = []

    for(let i = min; i <= max; i++) {
        numbersGrid.push(i);
    }

    return numbersGrid;

}