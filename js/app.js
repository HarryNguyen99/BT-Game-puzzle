let changeimage1 = [
    "img/frieza-1.jpg", "img/majinbuu-1.jpg", "img/songohan-1.jpg", "img/songoku-1.jpg", "img/vegeta-1.jpg"
];
let changeimage2 = [
    "img/frieza-2.jpg", "img/majinbuu-2.jpg", "img/songohan-2.jpg", "img/songoku-2.jpg", "img/vegeta-2.jpg"
];
let changeimage3 = [
    "img/frieza-3.jpg", "img/majinbuu-3.jpg", "img/songohan-3.jpg", "img/songoku-3.jpg", "img/vegeta-3.jpg"
];
let changeimage4 = [
    "img/frieza-4.jpg", "img/majinbuu-4.jpg", "img/songohan-4.jpg", "img/songoku-4.jpg", "img/vegeta-4.jpg"
];
let changeimage5 = [
    "img/frieza-5.jpg", "img/majinbuu-5.jpg", "img/songohan-5.jpg", "img/songoku-5.jpg", "img/vegeta-5.jpg"
];

function change1() {
    let random = Math.floor(Math.random() * 5);
    document.getElementById("image1").src = changeimage1 [random];
    checkImage();
}
function change2() {
    let random = Math.floor(Math.random() * 5);
    document.getElementById("image2").src = changeimage2 [random];
    checkImage();
}
function change3() {
    let random = Math.floor(Math.random() * 5);
    document.getElementById("image3").src = changeimage3 [random];
    checkImage();
}
function change4() {
    let random = Math.floor(Math.random() * 5);
    document.getElementById("image4").src = changeimage4 [random];
    checkImage();
}
function change5() {
    let random = Math.floor(Math.random() * 5);
    document.getElementById("image5").src = changeimage5 [random];
    checkImage()
}
function checkImage() {
    let imgstr1 = document.getElementById("image1").src;
    let cutstr1 = imgstr1.substr(0, 45);

    let imgstr2 = document.getElementById("image2").src;
    let cutstr2 = imgstr2.substr(0, 45);

    let imgstr3 = document.getElementById("image3").src;
    let cutstr3 = imgstr3.substr(0, 45);

    let imgstr4 = document.getElementById("image4").src;
    let cutstr4 = imgstr4.substr(0, 45);

    let imgstr5 = document.getElementById("image5").src;
    let cutstr5 = imgstr5.substr(0, 45);


    let checkTong = false;

    if (cutstr1 == cutstr2
        && cutstr1 == cutstr3
        && cutstr1 == cutstr4
        && cutstr1 == cutstr5 ) {
            checkTong = true;
    }

    if (checkTong) {
        document.getElementById("image1").style.boxShadow = "green 5px 5px 5px";
        document.getElementById("image2").style.boxShadow = "green 5px 5px 5px";
        document.getElementById("image3").style.boxShadow = "green 5px 5px 5px";
        document.getElementById("image4").style.boxShadow = "green 5px 5px 5px";
        document.getElementById("image5").style.boxShadow = "green 5px 5px 5px";
    }
}


