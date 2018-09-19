import '../scss/app.scss';

//import all images
var req = require.context("../images", true, /\.(png|svg|jpg|gif|jpeg|ico)$/);
req.keys().forEach(function(key){
    req(key);
});

//02
const submitHandler = (e) => {
    e.preventDefault();
    const fname = document.querySelector("input[name='fname']");
    const lname = document.querySelector("input[name='lname']");
    console.log('fname value: ', fname.value);
    console.log('lname value: ', lname.value);
};


const form1 = document.querySelector("form");
form1.addEventListener("submit", submitHandler);