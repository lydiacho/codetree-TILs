const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n');

//200x200 배열을 만들고 
//arr 순회하면서 각 칸이 X 인지 R인지 B인지 
//마지막에 B 개수 구하기 

function solution(arr) {
    const grid = Array.from({length: 200}, (v) => Array.from({length:200},(v)=>''));

    arr.forEach((v,idx)=>{
        const [x1, y1, x2, y2] = v.split(' ').map(v=>+v);
        //40,000번의 순회 x 10번 = 400,000번 <= 1000ms 
        for (let i = x1+100; i < x2+100; i++) {
            for (let j = y1+100; j < y2+100; j++) {
                if (idx % 2===0){
                    grid[i][j] = 'R';
                } else {
                    grid[i][j] = 'B';
                }
            }
        } 
    });
    
    const tempGrid = grid.map(v=>v.filter(w=>w==='B').length);
    return tempGrid.reduce((acc,curr)=>acc+curr,0);

}

console.log(solution(arr));