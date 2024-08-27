const fs = require("fs");
const [y, m, d] = fs.readFileSync(0).toString().trim().split(" ").map(v=>+v);

function isYunNyeon (year) {
    if( year % 4 === 0) {
        if (year%100 === 0) {
            if (year%400===0) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
}

function solution(y, m, d) {
    const arr = [-1, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    arr[2] = isYunNyeon(y) ? 29 : 28;

    if (d > arr[m]) return -1;

    if (m >= 3 && m <= 5) { 
        return 'Spring';
    }
    if (m >= 6 && m <= 8) {
        return 'Summer';
    }
    if (m >= 9 && m <= 11) {
        return 'Fall';
    }
    return 'Winter';
}

console.log(solution(y, m, d));