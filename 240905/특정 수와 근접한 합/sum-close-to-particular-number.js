const fs = require('fs');
const [input1, input2] = fs.readFileSync(0).toString().trim().split('\n');
const [N, S] = input1.split(' ').map(v=>+v);
const arr = input2.split(' ').map(v=>+v);

function solution(N, S, arr) {
    let answer = 10000;
    const sum = arr.reduce((acc,curr)=>acc+curr, 0);
    // arr 순회하면서 2개의 값을 각각 뽑아 계산 
    for (let i = 0; i < N; i++) {
        for (let j = i+1; j < N; j++) {
            const dist = Math.abs((sum - arr[i] - arr[j]) - S);
            answer = Math.min(answer, dist);
        }
    }
    return answer;
}

console.log(solution(N, S, arr));