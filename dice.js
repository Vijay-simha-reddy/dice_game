start.addEventListener("click",function(){

var numb1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+numb1+".png";
document.querySelectorAll("img")[0].setAttribute("src", img1);

var numb2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+numb2+".png";
document.querySelectorAll("img")[1].setAttribute("src", img2);

if (numb1>numb2){
    document.querySelector("h1").innerHTML="Player-1 win";
}
else if (numb1<numb2){
    document.querySelector("h1").innerHTML="Player-2 win";
}
else{
    document.querySelector("h1").innerHTML="Draw";
}

})