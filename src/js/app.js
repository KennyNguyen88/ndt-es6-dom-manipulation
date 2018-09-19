import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//04
const clickHandler = (e) => {
    e.preventDefault();
    const alink = document.querySelector("a");
    console.log('href: ', alink.href);
    console.log('hreflang: ', alink.hreflang);
    console.log('rel: ', alink.rel);
    console.log('target: ', alink.target);
    console.log('type: ', alink.type);
};


const btn = document.querySelector("button");
btn.addEventListener("click", clickHandler);