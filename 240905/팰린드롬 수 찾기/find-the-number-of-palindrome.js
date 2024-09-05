const fs = require('fs');
const [X, Y] = fs.readFileSync(0).toString().trim().split(' ').map(v=>+v);

// X, Y 사이 개수가 가장 클 경우가 999,991 개 일 때니까 백만번*N 연산 -> 1초 안넘음 -> 완탐

function isPalindrome(num) {
    num += ''; // 문자열 변환
    let flag = true;
    for (let i = 0; i < num.length / 2; i++) {
        if (num[i]!==num[num.length-1-i]) {
            flag = false;
            break;
        }
    }
    return flag;
}

function solution(X, Y) {
    let answer = 0;
    for (let i = X; i <= Y; i++) {
        if (isPalindrome(i)) answer++;
    }
    return answer;
}

console.log(solution(X, Y))