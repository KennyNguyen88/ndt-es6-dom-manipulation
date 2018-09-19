import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//08
const removeColor = () => {
    const list = document.querySelector("select ");
    list.remove(list.selectedIndex);
};

const clickHandler = (e) => {
    e.preventDefault();
    removeColor();
};

const btn = document.querySelector("input[type='button']");
btn.addEventListener("click", clickHandler);