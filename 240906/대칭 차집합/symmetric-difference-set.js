const fs = require('fs');
const [n, a, b] = fs.readFileSync(0).toString().trim().split('\n');
const [aN, bN] = n.split(' ').map(v=>+v);
const aArr = a.split(' ').map(v=>+v);
const bArr = b.split(' ').map(v=>+v);
const s = new Set();
aArr.forEach(v=>{
    s.add(v);
})
bArr.forEach(v=>{
    s.add(v);
})
console.log(aN + bN - s.size);