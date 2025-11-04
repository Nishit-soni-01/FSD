const rows = parseInt(prompt("Enter number of rows:"), 10) || 5;

for (let i = 0; i < rows; i++) {
    let line = '';

    // Spaces
    for (let j = 0; j < rows - i - 1; j++) {
        line += ' ';
    }

    // Stars
    for (let j = 0; j < 2 * i + 1; j++) {
        line += '*';
    }

    console.log(line);
}