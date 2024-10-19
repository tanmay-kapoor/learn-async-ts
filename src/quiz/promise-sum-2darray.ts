const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const sumByRowPromises: Promise<number>[] = array2D_1.map((row: number[]) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const sum = row.reduce((acc, val) => acc + val, 0);
                resolve(sum);
            } catch (err) {
                reject(`Error: ${err}`);
            }
        }, 0);
    })
});

Promise.all(sumByRowPromises)
    .then((sums: number[]) => {
        console.log('sums:', sums);
    })
    .catch(err => {
        console.error('Error:', err);
    });