// 이동 시 : 1)색이 달라야함, 2)최소 (+1,+1) 이동, 3)시작/도착제외하고 2번 경유해야 함 

const fs = require('fs');
const [rc, ...arr] = fs.readFileSync(0).toString().trim().split('\n');
const [R, C] = rc.split(' ').map(v=>+v);
const wb = arr.map(v=>v.split(' '));
let answer = 0;

function findWay(R, C, wb, x, y, count) {
    if (x===R-1 && y===C-1 && count === 3) {
        answer++; 
    }
    for (let i = x+1; i < R; i++) {
        for (let j = y+1; j < C; j++) {
            if (wb[i][j] === wb[x][y]) continue;
            findWay(R, C, wb, i, j, count+1);
        }
    }
}
function solution(R, C, wb) {
    findWay(R, C, wb, 0, 0, 0);
    return answer;

}

console.log(solution(R,C, wb));