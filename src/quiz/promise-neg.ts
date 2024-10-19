const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

const hasNegativeInRowPromises: Promise<number>[] = array2D_3.map((row: number[], index: number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hasNegative = row.some(value => value < 0);
            return hasNegative ? resolve(index) : reject('No negative number found');
        }, 0);
    });
});

Promise.any(hasNegativeInRowPromises)
    .then((index: number) => {
        console.log('A row with negative number:', index);
    })
    .catch(err => {
        console.error('Error:', err);
    });