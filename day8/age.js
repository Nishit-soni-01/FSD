const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

rl.question('Enter birth date (YYYY-MM-DD or MM/DD/YYYY): ', input => {
    const d = new Date(input.trim());
    if (isNaN(d)) return console.error('Invalid date'), rl.close();
    const now = new Date();
    if (d > now) return console.error('Date is in the future'), rl.close();

    let age = now.getFullYear() - d.getFullYear();
    const m = now.getMonth() - d.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < d.getDate())) age--;

    console.log(`Age: ${age} years`);
    rl.close();
});
