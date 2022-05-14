export function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;

  let rows = Array(numRows).fill("");
  let currentRow = 0;
  let movingBack = false;

  for (const char of s) {
    rows[currentRow] += char;

    movingBack ? currentRow-- : currentRow++;

    if (currentRow === numRows - 1 || currentRow === 0)
      movingBack = !movingBack;
  }

  return rows.join("");
}
