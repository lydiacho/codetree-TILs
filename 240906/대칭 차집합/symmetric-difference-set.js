const fs = require('fs');
const [n, a, b] = fs.readFileSync(0).toString().trim().split('\n');
const [aN, bN] = n.split(' ').map(v=>+v);
const aArr = a.split(' ').map(v=>+v);
const bArr = b.split(' ').map(v=>+v);
const common = [...aArr, ...bArr];
const s = new Set(common);
console.log(s.size - (aN + bN - s.size));