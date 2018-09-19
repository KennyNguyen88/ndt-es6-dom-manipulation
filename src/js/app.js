import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//01
function js_style(){
    const pText = document.querySelector("#text");
    pText.style.fontSize = "20px";
    pText.style.color = "yellow";
}

const jsstyle = document.querySelector("#jsstyle");
jsstyle.addEventListener("click", js_style);