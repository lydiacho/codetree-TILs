const fs = require('fs');
const [n, ...arr] = fs.readFileSync(0).toString().trim().split('\n');
const commands = arr.map(v=>v.split(' '));

const s = new Set();
commands.forEach((v,i)=>{
    const [com, num] = v;
    switch(com) {
        case 'add' : 
            s.add(num);
            break;
        case 'remove' : 
            s.delete(num);
            break;
        case 'find' : 
            console.log(s.has(num));
    }
})