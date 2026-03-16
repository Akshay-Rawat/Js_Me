const excel = document.getElementById("excel");

const rows = 100;
const cols = 26;

// Function to convert number → A, B, C...
function getColumnName(n) {
  return String.fromCharCode(64 + n);
}

// Top-left empty corner
let corner = document.createElement("div");
corner.classList.add("cell", "header");
excel.appendChild(corner);

// Column Headers (A-Z)
for (let c = 1; c <= cols; c++) {
  let colHeader = document.createElement("div");
  colHeader.classList.add("cell", "header");
  colHeader.textContent = getColumnName(c);
  excel.appendChild(colHeader);
}

// Rows + Cells
for (let r = 1; r <= rows; r++) {

  let rowHeader = document.createElement("div");
  rowHeader.classList.add("cell", "header");
  rowHeader.textContent = r;
  excel.appendChild(rowHeader);

  // Cells
  for (let c = 1; c <= cols; c++) {
    let cell = document.createElement("div");
    cell.classList.add("cell", "input-cell");
    cell.contentEditable = true; // makes it editable
    excel.appendChild(cell);
  }
}
