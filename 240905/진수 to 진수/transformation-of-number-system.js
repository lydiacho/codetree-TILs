const fs = require('fs');
const [ab, n] = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = ab.split(' ').map(v=>+v);

function solution(a, b, n) {
    // n을 a진수 -> 10진수 -> b진수로 변환 
    // a진수 -> 10진수 
    let num = 0;
    for (let i = 0; i < n.length; i++) {
        num = num * a + +n[i];
    }
    // 10진수 -> b진수 
    const arr = [];
    while (true) {
        if (num < b){
            arr.push(num);
            break;
        }
        arr.push(num % b);
        num = Math.floor(num/b); 
    }
    return arr.reverse().reduce((acc,curr)=>acc+curr,'');
}


console.log(solution(a,b,n));