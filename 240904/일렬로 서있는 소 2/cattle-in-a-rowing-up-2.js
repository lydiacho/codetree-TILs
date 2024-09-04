const fs = require('fs');
const [n, arr] = fs.readFileSync(0).toString().trim().split('\n');
const A = arr.split(' ').map(v=>+v);

function solution(n, A) {
    let answer = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            for (let k = j+1; k < n; k++) {
                if (A[i] <= A[j] && A[j] <= A[k]) answer++;
            }
        }
    }
    return answer;
}

console.log(solution(n,A));