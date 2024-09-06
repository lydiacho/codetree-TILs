const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n');
const dots = arr.map(v=>v.split(' ').map(w=>+w));

// 같은 x좌표를 갖는 점들 중 y가 가장 작은 애만 남기기 

function solution(dots) {
    const table = {};
    dots.map(v=>{
        const [x,y] = v;
        if (!table[x]) table[x] = [];
        table[x].push(y);
    })

    const mins = Object.values(table).map(v=>Math.min(...v));
    return mins.reduce((acc,curr)=>acc+curr,0);
}

console.log(solution(dots));