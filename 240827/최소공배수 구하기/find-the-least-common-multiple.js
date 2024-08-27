const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(v=>+v);

function findGcd(n, m) {
    const min = Math.min(n,m);
    const max = Math.max(n,m);

    let gcd = 0;
    for (let i = 1; i <= min; i++) {
        if (max * i % min === 0) {
            gcd = max * i;
            break;
        }
    }

    console.log(gcd);
}

findGcd(n, m);