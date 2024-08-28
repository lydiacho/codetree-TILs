const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(v=>+v);
const A = input.slice(1, n+1).map(v=>v.split(' '));
const B = input.slice(n+1).map(v=>v.split(' '));

const arrA = [];
const arrB = [];

let sumA = 0;
for (let i = 0; i < n; i++) {
    const [offset, dir] = A[i];

    if (dir==='L') {
        for (let a = 1; a <= +offset; a++) {
            arrA.push(sumA-a);
        }
        sumA -= +offset;
    } else {
        for (let a = 1; a <= +offset; a++) {
            arrA.push(sumA+a);
        }
        sumA += +offset;
    }
}

let sumB = 0;
for (let i = 0; i < m; i++) {
    const [offset, dir] = B[i];

    if (dir==='L') {
        for (let a = 1; a <= +offset; a++) {
            arrB.push(sumB-a);
        }
        sumB -= +offset;
    } else {
        for (let a = 1; a <= +offset; a++) {
            arrB.push(sumB+a);
        }
        sumB += +offset;
    }
}

const aLength = arrA.length;
const bLength = arrB.length;

if (aLength < bLength) {
    for (let i = 0; i < bLength - aLength; i++) {
        arrA.push(arrA[aLength-1]);
    }
} else if (aLength > bLength) {
        for (let i = 0; i < aLength - bLength; i++) {
        arrB.push(arrB[bLength-1]);
    }
}

let count = 0;
for (let i = 1; i < arrA.length; i++) {
    if (arrA[i-1]!==arrB[i-1] && arrA[i]===arrB[i]) count++;
}
console.log(count);