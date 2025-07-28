const fs = require('fs');

function parseTestCase(file) {
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    const points = [];
    const k = data.keys.k;

    let count = 0;
    for (let key in data) {
        if (key === "keys") continue;
        if (count >= k) break;

        const x = BigInt(key);
        const base = parseInt(data[key].base);
        const valueStr = data[key].value;
        const y = BigInt(parseInt(valueStr, base));

        points.push({ x, y });
        count++;
    }

    return { points, k };
}

function lagrangeInterpolation(points, k) {
    let result = 0n;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;

        let numerator = 1n;
        let denominator = 1n;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                numerator *= -xj;
                denominator *= (xi - xj);
            }
        }

        let term = yi * numerator / denominator;
        result += term;
    }

    return result;
}

function solve(fileName) {
    const { points, k } = parseTestCase(fileName);
    return lagrangeInterpolation(points, k);
}

const secret1 = solve('testcase1.json');
const secret2 = solve('testcase2.json');

console.log("Secret 1:", secret1.toString());
console.log("Secret 2:", secret2.toString());