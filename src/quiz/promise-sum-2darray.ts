const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const promises: Promise<number>[] = array2D_1.map((row: number[]) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sum = row.reduce((acc, val) => acc + val, 0);
            resolve(sum);
        }, 0);
    })
});

Promise.all(promises)
    .then((sums: number[]) => {
        console.log('sums:', sums);
    })
    .catch(err => {
        console.error('Error:', err);
    });