const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n');
const commands = arr.map(v=>v.split(' '));

//xL : 왼쪽으로 이동하며 x칸 타일 왼쪽 뒤집기 
//xR : 오른쪽으로 이동하며 x칸 타일 오른쪽 뒤집기 
//현재위치 0 포함 x칸만큼 왼쪽으로 가면 -(x-1), 오른쪽으로 가면 +(x-1)
// 내가 마지막에 있는 위치 기준, 오른쪽은 무조건 흰색, 왼쪽은 무조건 검은색

    function solution(commands) {
    let pos = 0;
    let left = 0; 
    let right = 0;
    for (let i = 0; i < n; i++) {
        let x = +commands[i][0];

        if (commands[i][1]==='R') {
            pos += x-1;
            right = Math.max(right, pos);
        } else {
            pos -= x-1;
            left = Math.min(left, pos);
        }
    }

    if (commands[n-1][1]==='L') {
        console.log(right-pos+1,pos-left);    
    } else {
        console.log(right-pos,pos-left+1);
    }   
}

solution(commands);