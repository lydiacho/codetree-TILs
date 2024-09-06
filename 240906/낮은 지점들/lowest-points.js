const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n');
const dots = arr.map(v=>v.split(' ').map(w=>+w));

// 같은 x좌표를 갖는 점들 중 y가 가장 작은 애만 남기기 

function solution(dots) {
    const m = new Map();
    dots.map(v=>{
        const [x,y] = v;
        if (m.has(x)) m.set(x,Math.min(m.get(x),y));
        else m.set(x,y);
    })

    return Array.from(m.values()).reduce((acc,curr)=>acc+curr,0);
}

console.log(solution(dots));