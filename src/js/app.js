import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//05
const clickHandler = (e) => {
    e.preventDefault();
    const table = document.querySelector("table");
    const newRow = table.insertRow();
    const newCell1 = newRow.insertCell(0);
    const newCell2 = newRow.insertCell(1);
    newCell1.innerHTML = '1';
    newCell2.innerHTML = '2';
};


const btn = document.querySelector("input[type='button']");
btn.addEventListener("click", clickHandler);