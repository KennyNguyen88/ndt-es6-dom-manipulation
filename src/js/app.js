import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//09
const count = () => {
    const list = document.querySelector("select ");
    const totalOptions = list.length;
    console.log('Count: ' + totalOptions);
    Array.from(list.options).forEach((option) => {
        console.log("Index: ",option.index," - Value: ", option.value);
    })
};

const clickHandler = (e) => {
    e.preventDefault();
    count();
};

const btn = document.querySelector("input[type='button']");
btn.addEventListener("click", clickHandler);