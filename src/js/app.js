import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//07
const modify = (rowNumber,columnNumber) => {
    const table = document.querySelector("table");
    for(let i = 0 ; i < rowNumber; i++){
        const newRow = table.insertRow(i);
        for(let ii = 0; ii < columnNumber; ii++){
            const newCell = newRow.insertCell(ii);
            newCell.innerHTML = `Row-${i} Column-${ii}`;
        }
    }
};

const clickHandler = (e) => {
    e.preventDefault();
    modify(4,3);
};

const btn = document.querySelector("input[type='button']");
btn.addEventListener("click", clickHandler);