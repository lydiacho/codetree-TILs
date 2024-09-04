// 모든 사람의 이동 거리의 합이 최소 
const fs = require('fs');
const [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
const A = arr.split(' ').map(v=>+v);

function solution (n, A) {
    let min = 100*100*100;
    for (let i =  0; i < n; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            if (i===j) continue;
            sum += Math.abs(j-i) * A[j];
        }
        min = Math.min(min, sum);
    }
    return min;
}

console.log(solution(n, A));