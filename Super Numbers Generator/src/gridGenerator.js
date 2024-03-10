export const gridGenerator = (min = 0, max = 0) => {

    let numbersGrid = []

    for(let i = min; i <= max; i++) {
        numbersGrid.push(i);
    }

    return numbersGrid;

}