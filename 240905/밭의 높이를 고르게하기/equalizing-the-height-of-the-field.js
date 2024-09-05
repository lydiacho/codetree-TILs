const fs = require('fs');
const [input1, input2] = fs.readFileSync(0).toString().trim().split('\n');
const [N, H, T] = input1.split(' ').map(v=>+v);
const arrN = input2.split(' ').map(v=>+v);

// H 높이짜리가 최소 T개이상 연속으로 
function solution(N, H, T, arrN) {
    let answer = 10 * 200;
    // 가능한 T개 묶음의 케이스 순회하면서 비용 계산하기 
    for (let i = 0; i <= N-T ; i++) {
        let sum = 0;
        for (let j = 0; j <= i; j++) {
            sum += Math.abs(arrN[j]-H);
        }
        answer = Math.min(answer, sum);
    }
    return answer;
}

console.log(solution(N, H, T, arrN));