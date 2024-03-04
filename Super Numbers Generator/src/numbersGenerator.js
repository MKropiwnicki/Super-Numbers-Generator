export const numbersGenerator = (min, max, repetitions) => {
    let uniqueNumbers = new Set();
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    

    for(let i = 1; i <= repetitions; i++) {
        let randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
        uniqueNumbers.add(randomNumber);
    }
    

    while(uniqueNumbers.size < repetitions) {
        uniqueNumbers.add(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
    }
     return Array.from(uniqueNumbers).sort((a, b) => {return  a - b });

}

