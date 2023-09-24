var goback = document.getElementById("goback");
var iframe = document.getElementById("iframe");
var iframeSrc = iframe.src;

goback.style.display = "none";
console.log(iframeSrc);
if (iframeSrc != "front/front-points-button.html"){
    goback.style.display = "flex";
}//要改!!