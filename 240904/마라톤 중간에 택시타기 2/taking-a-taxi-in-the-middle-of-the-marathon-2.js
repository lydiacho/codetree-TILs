// 1번, N번 빼고 체크포인트 하나 건너뛸 때 최소 거리 
// 점과 점 사이의 거리 |x1 - x2| + |y1 - y2|

const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n');
const pos = arr.map(v=>v.split(' ').map(w=>+w));

function solution(n, pos) {
    let min = 400000;

    // 각 체크포인트를 빠질 때 거리 구하기 
    for (let i = 1; i<n-1; i++) {
        let dist = 0;
        for (let j = 0; j < n-1; j++) {
            if (j===i) continue;
            const [x1, y1] = pos[j];
            const [x2, y2] = (j+1===i) ? pos[j+2] : pos[j+1];
            dist += Math.abs(x1 - x2) + Math.abs(y1 - y2);
        }
        min = Math.min(dist, min);
    }
    return min;
}

console.log(solution(n, pos));