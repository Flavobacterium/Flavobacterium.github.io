var nav = document.getElementById("mySidenav");
var bars = document.getElementById("bars");
var cross = document.getElementById("clo");
//Closes the navigation tab
function closebt() {
    nav.style.width = "0px";
    bars.style.marginLeft = "0%";
   bars.style.height = "8%";
}
//Open the naviagtion tab
function openbt() {
   nav.style.width = "250px";
   bars.style.marginLeft = "260px";
   bars.style.height = "0%";
}
//toggles Navigation bar
function toggbt() {
    if (nav.style.width = "250px"){
        closebt;
    }else if (nav.style.width = "0px"){
        openbt;
    }
}
//Following is for the image gallery
//Make cross visible

//cross mania
function opcross() {
    cross.style.width = "5%";
}
//close cross
function clcross() {
    cross.style.width = "0%";
}
function opcross2() {
    var cross = document.getElementById("clo2");
    cross.style.width = "5%";
}
//close cross
function clcross2() {
    var cross = document.getElementById("clo2");
    cross.style.width = "0%";
}
function opcross3() {
    var cross = document.getElementById("clo3");
    cross.style.width = "5%";
}
//close cross
function clcross3() {
    var cross = document.getElementById("clo3");
    cross.style.width = "0%";
}
function opcross4() {
    var cross = document.getElementById("clo4");
    cross.style.width = "5%";
}
//close cross
function clcross4() {
    var cross = document.getElementById("clo4");
    cross.style.width = "0%";
}
function opcross5() {
    var cross = document.getElementById("clo5");
    cross.style.width = "5%";
}
//close cross
function clcross5() {
    var cross = document.getElementById("clo5");
    cross.style.width = "0%";
}
//image toggle mania

//expand images
function expimg1() {
    var imgval = document.getElementById("ph1");
    imgval.style.width = "100%";
    imgval.style.height = "100%";
    imgval.style.left = "0%";
    imgval.style.top = "0%";
     imgval.style.zIndex = "6";
    opcross;
} 
 //close images
function climg1(){
    var imgval = document.getElementById("ph1");
    imgval.style.width = "20%";
    imgval.style.height = "20%";
    imgval.style.left = "5%";
    imgval.style.top = "10%";
    imgval.style.zIndex = "0";
    clcross;
}
function expimg2() {
    var imgval = document.getElementById("ph2");
    imgval.style.width = "100%";
    imgval.style.height = "100%";
    imgval.style.left = "0%";
    imgval.style.top = "0%";
     imgval.style.zIndex = "6";
    opcross;
} 
 //close images
function climg2(){
    var imgval = document.getElementById("ph2");
    imgval.style.width = "20%";
    imgval.style.height = "20%";
    imgval.style.left = "40%";
    imgval.style.top = "10%";
     imgval.style.zIndex = "0";
    clcross;
}
function expimg3() {
    var imgval = document.getElementById("ph3");
    imgval.style.width = "100%";
    imgval.style.height = "100%";
    imgval.style.left = "0%";
    imgval.style.top = "0%";
     imgval.style.zIndex = "6";
    opcross;
} 
 //close images
function climg3(){
    var imgval = document.getElementById("ph3");
    imgval.style.width = "20%";
    imgval.style.height = "20%";
    imgval.style.left = "75%";
    imgval.style.top = "10%";
     imgval.style.zIndex = "0";
    clcross;
}
function expimg4() {
    var imgval = document.getElementById("ph4");
    imgval.style.width = "100%";
    imgval.style.height = "100%";
    imgval.style.left = "0%";
    imgval.style.top = "0%";
     imgval.style.zIndex = "6";
    opcross;
} 
 //close images
function climg4(){
    var imgval = document.getElementById("ph4");
    imgval.style.width = "20%";
    imgval.style.height = "20%";
    imgval.style.left = "23%";
    imgval.style.top = "50%";
     imgval.style.zIndex = "0";
    clcross;
}
function expimg5() {
    var imgval = document.getElementById("ph5");
    imgval.style.width = "100%";
    imgval.style.height = "100%";
    imgval.style.left = "0%";
    imgval.style.top = "0%";
     imgval.style.zIndex = "6";
    opcross;
} 
 //close images
function climg5(){
    var imgval = document.getElementById("ph5");
    imgval.style.width = "20%";
    imgval.style.height = "20%";
    imgval.style.left = "57%";
    imgval.style.top = "50%";
     imgval.style.zIndex = "0";
    clcross;
}
