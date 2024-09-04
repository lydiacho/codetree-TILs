const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('');

function solution(arr) {
    let count = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i]===')') continue;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j]===')') count++;
        }
    }

    return count;
}

console.log(solution(arr));