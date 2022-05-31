function deasy(u,c){
    o= c.getAttribute("style","background-color");
    if ("background-color:"+u==o) {
        document.querySelector("div").style.backgroundColor=u;
        hard.style.color=u;
        reset.style.color=u;
        easy.style.background=u;
        easy.style.color="white";
        hard.addEventListener("mouseover",()=>{
            hard.style.background=u;
            hard.style.color="white";
        })
        hard.addEventListener("mouseleave",()=>{
            hard.style.background="white";
            hard.style.color=u;
        })
        reset.addEventListener("mouseover",()=>{
            reset.style.background=u;
            reset.style.color="white";
        })
        reset.addEventListener("mouseleave",()=>{
            reset.style.background="white";
            reset.style.color=u;
        })
        document.querySelector("main").replaceChildren("");
        q=document.createElement("h1");
        document.querySelector("main").appendChild(q);
        q.style.paddingTop="230px";
        q.textContent="THAT'S RIGHT";
        q.style.color=u;
    }
    else{
        removed.push(c)
        main_div.removeChild(c)
    }
}
function dhard(u,c){
    o= c.getAttribute("style","background-color");
    if ("background-color:"+u==o) {
        document.querySelector("div").style.backgroundColor=u;
        hard.style.color="white";
        reset.style.color=u;
        hard.style.background=u;
        easy.style.color=u;
        easy.addEventListener("mouseover",()=>{
            easy.style.background=u;
            easy.style.color="white";
        })
        easy.addEventListener("mouseleave",()=>{
            easy.style.background="white";
            easy.style.color=u;
        })
        reset.addEventListener("mouseover",()=>{
            reset.style.background=u;
            reset.style.color="white";
        })
        reset.addEventListener("mouseleave",()=>{
            reset.style.background="white";
            reset.style.color=u;
        })
        document.querySelector("main").replaceChildren("");
        q=document.createElement("h1");
        document.querySelector("main").appendChild(q);
        q.style.paddingTop="230px";
        q.textContent="THAT'S RIGHT";
        q.style.color=u;
    }
    else{
        removed.push(c)
        main_div.removeChild(c)
    }
}
// three randum numbers for color rgb
function rand(){
    a=Math.round(Math.random()*255);
    b=Math.round(Math.random()*255);
    c=Math.round(Math.random()*255);
    return [a, b, c];
}
var removed=[];
// color code need to guess
var u;
// buttons selector
const easy=document.getElementById("Easy_button");
const hard=document.getElementById("Hard_button");
const reset=document.getElementById("reset")
// div contain colors div
var main_div=document.getElementById("main_grid");
// style selector
const style=document.querySelector("style");
// color code selector that visiable to user
const h=document.querySelector("h2");


// easy button for three colors option
easy.addEventListener("click",()=>{
// color for button text & back ground color & hover effect
    easy.style.backgroundColor=("#72a572");
    hard.style.backgroundColor=("white");
    easy.style.color=("white");
    hard.style.color=("#72a572");
    hard.setAttribute("style","--td-background-color:#72a572");
    removed=[];
// empty grid from colors
    document.querySelector("main").replaceChildren("")
    main_div=document.createElement("div")
    main_div.setAttribute("id","main_grid")
    document.querySelector("main").appendChild(main_div)
    main_div.replaceChildren("");
// rundering divs with thiere id
    y=[];
    for (let i = 0; i < 3; i++) {
        y[i]=document.createElement("div");
        y[i].setAttribute("id","color"+i);
        main_div.appendChild(y[i]);
    }
// randum number to put the desire color in randum place
    var r=Math.round( Math.random()*2);
// rundering the color of the divs with color code in the top
    for (let i = 0; i < 3; i++) {
        if (r == i) {
            rand();
            y[i].setAttribute("style","background-color:rgb("+a+","+b+","+c+")");
            h.textContent="color code rgb("+a+","+b+","+c+")";
            u= "rgb("+a+","+b+","+c+")";
        }
        else{
            rand();
            y[i].setAttribute("style","background-color:rgb("+a+","+b+","+c+")");
        }
    }
    color1=document.getElementById("color1");
    color1.addEventListener("click",()=>{
        o= color1.getAttribute("style","background-color");
        deasy(u,color1)
        })
    color2=document.getElementById("color2");
    color2.addEventListener("click",()=>{
        o= color2.getAttribute("style","background-color");
        deasy(u,color2)
        })
    color0=document.getElementById("color0");
    color0.addEventListener("click",()=>{
        
        deasy(u,color0)
        })
})


// hard button for six colors option
hard.addEventListener("click",()=>{
// color for button text & back ground color & hover effect
    easy.style.backgroundColor=("white");
    hard.style.backgroundColor=("#72a572");
    hard.style.color=("white");
    easy.style.color=("#72a572");
    easy.setAttribute("style","--td-background-color:#72a572");
    removed=[];
// empty grid from colors
    document.querySelector("main").replaceChildren("")
    main_div=document.createElement("div")
    main_div.setAttribute("id","main_grid")
    document.querySelector("main").appendChild(main_div)
    main_div.replaceChildren("");
// rundering divs with thiere id
    y=[];
    for (let i = 0; i < 6; i++) {
        y[i]=document.createElement("div");
        y[i].setAttribute("id","color"+i);
        main_div.appendChild(y[i]);
    }
// randum number to put the desire color in randum place
    var r=Math.round( Math.random()*5);
// rundering the color of the divs with color code in the top
    for (let i = 0; i < 6; i++) {
        if (r == i) {
            rand();
            y[i].setAttribute("style","background-color:rgb("+a+","+b+","+c+")");
            h.textContent="color code rgb("+a+","+b+","+c+")";
            u= "rgb("+a+","+b+","+c+")";
        }
        else{
            rand();
            y[i].setAttribute("style","background-color:rgb("+a+","+b+","+c+")");
        }
    }
    color1=document.getElementById("color1");
    color1.addEventListener("click",()=>{
        o= color1.getAttribute("style","background-color");
        dhard(u,color1)
    })
    color2=document.getElementById("color2");
    color2.addEventListener("click",()=>{
        o= color2.getAttribute("style","background-color");
        dhard(u,color2)
    })
    color0=document.getElementById("color0");
    color0.addEventListener("click",()=>{
        
        dhard(u,color0)
    })
    color3=document.getElementById("color3");
    color3.addEventListener("click",()=>{
        o= color3.getAttribute("style","background-color");
        dhard(u,color3)
    })
    color4=document.getElementById("color4");
    color4.addEventListener("click",()=>{
        o= color4.getAttribute("style","background-color");
        dhard(u,color4)
    })
    color5=document.getElementById("color5");
    color5.addEventListener("click",()=>{
        dhard(u,color5)
    })
})


// rundering divs with thiere id
y=[];
for (let i = 0; i < 6; i++) {
    y[i]=document.createElement("div");
    y[i].setAttribute("id","color"+i);
    main_div.appendChild(y[i]);
}
// randum number to put the desire color in randum place
var r=Math.round( Math.random()*5);
// rundering the color of the divs with color code in the top
for (let i = 0; i < 6; i++) {
    if (r == i) {
        rand();
        y[i].setAttribute("style","background-color:rgb("+a+","+b+","+c+")");
        h.textContent="color code rgb("+a+","+b+","+c+")";
        u= "rgb("+a+","+b+","+c+")";
    }
    else{
        rand()
        y[i].setAttribute("style","background-color:rgb("+a+","+b+","+c+")");
    }
}
color1=document.getElementById("color1");
color1.addEventListener("click",()=>{
    o= color1.getAttribute("style","background-color");
    dhard(u,color1)
})
color2=document.getElementById("color2");
color2.addEventListener("click",()=>{
    o= color2.getAttribute("style","background-color");
    dhard(u,color2)
})
color0=document.getElementById("color0");
color0.addEventListener("click",()=>{
    
    dhard(u,color0)
})
color3=document.getElementById("color3");
color3.addEventListener("click",()=>{
    o= color3.getAttribute("style","background-color");
    dhard(u,color3)
})
color4=document.getElementById("color4");
color4.addEventListener("click",()=>{
    o= color4.getAttribute("style","background-color");
    dhard(u,color4)
})
color5=document.getElementById("color5");
color5.addEventListener("click",()=>{
    dhard(u,color5)
})


reset.addEventListener("click",()=>{
    for (let i=0;i<removed.length;i++){
    f=removed[i];
    main_div.appendChild(f);
    }
    removed=[];
})


var r1=document.getElementById("r1");
var opacity1=Number(getComputedStyle(r1).getPropertyValue("opacity"));
setInterval(show1,100);
function show1(){
    if (opacity1<1){
        opacity1+=0.1;
        r1.style.opacity=opacity1;
}}

const r2=document.getElementById("r2")
var opacity2=Number(getComputedStyle(r2).getPropertyValue("opacity"))
setTimeout(show21,750)
function show21(){
    setInterval(show2,100)
}
function show2(){
    if (opacity2<1){
        opacity2+=0.1
        r2.style.opacity=opacity2
    }
}
setTimeout(show31,1500)
function show31(){
    setInterval(show3,100)
}
const r3=document.getElementById("r3")
var opacity3=Number(getComputedStyle(r3).getPropertyValue("opacity"))
function show3(){
    if (opacity3<1){
        opacity3+=0.1
        r3.style.opacity=opacity3
    }
}
var text="Guess Color Code Game"
var i=0
function typing(){
    if (i<text.length){
        document.getElementById("text").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,100);
    }
}
setTimeout(typing,2000)
function hide(){
    document.getElementById("preloader").replaceWith("");
}
setTimeout(hide,5000)