// N -> 2진법으로 -> 한숫자만 바꿈 = a 
// a를 보고 가능한 N 중 최댓값 찾기 -> 가장 앞에있는 0을 1로 바꾸면 됨 

const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('').map(v=>+v);

function solution(arr) {
    const n = arr.length;
    // 첫번째 0 찾아서 1 바꾸기 
    for(let i = 0; i < n; i++) {
        if(arr[i]===0) {
            arr[i] = 1;
            break;
        }
    }

    // 최댓값의 이진법 -> 십진법으로 바꾸기 
    return arr.reduce((acc,curr,idx)=>{
        if (curr===0) return acc;
        return acc + Math.pow(2, n-1-idx);
    },0)

}

console.log(solution(arr));