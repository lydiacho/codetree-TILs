// 모든 사람의 이동 거리의 합이 최소 
const n = 5;
const A = [1, 2, 3, 2, 6];

function solution (n, A) {
    let min = 10000;
    for (let i =  0; i < A.length; i++) {
        let sum = 0;
        for (let j = 0; j < A.length; j++) {
            if (i===j) continue;
            sum += Math.abs(j-i) * A[j];
        }
        min = Math.min(min, sum);
    }
    return min;
}

console.log(solution(n, A));