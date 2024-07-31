let bgContainer=document.getElementById("bgContainer");
let button=document.getElementById("button")
let bgColorsArray= ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];
let len=bgColorsArray.length;
 button.onclick=function(){
    let random=Math.random();
    let randomColor=Math.ceil(random *len);
    let index=randomColor-1;
    bgContainer.style.backgroundColor=bgColorsArray[index];
}
