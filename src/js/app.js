import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//06
const modify = (rowIndex,columnIndex,cellString) => {
    const table = document.querySelector("table");
    const row = table.rows[rowIndex];
    const cell = row.cells[columnIndex];
    cell.innerHTML = cellString;
};

const clickHandler = (e) => {
    e.preventDefault();
    modify(1,0,"New 10");
};

const btn = document.querySelector("input[type='button']");
btn.addEventListener("click", clickHandler);