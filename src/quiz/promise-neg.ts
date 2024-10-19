const array2D_3 = [
    [1, 2, -3],
    [4, 5, 6],
    [7, 8, -9]
];

const hasNegativeInRowPromises: Promise<number[]>[] = array2D_3.map((row: number[], index: number) => {
    return new Promise((resolve, reject) => {
        const time: number = index == 0 ? 1000 : 0;
        setTimeout(() => {
            const hasNegative = row.some(value => value < 0);
            return hasNegative ? resolve(row) : reject('No negative number found');
        }, time);
    });
});

Promise.any(hasNegativeInRowPromises)
    .then((row: number[]) => {
        console.log('A row with negative number:', row);
    })
    .catch(err => {
        console.error('Error:', err);
    });