let mainh = document.getElementById("h");
let container = document.getElementById("contener");
let fpart1 = document.getElementById("fpart1");
let fpart2 = document.getElementById("fpart2");
let fpart3 = document.getElementById("fpart3");
let fpartb = document.getElementById("fpartb");
let bpage = document.getElementById("bpage");
let hp = document.getElementById("hp");
let ha = document.getElementById("ha");
let hd = document.getElementById("hd");
let go = document.getElementById("go");

fpart1.addEventListener("click",function(){
    fpart1.style.backgroundColor = "white";
    hp.style.color = "green";
    mainh.innerHTML = "--> Please Fill The all details correctly <--";
    mainh.style.color = "red";
})
fpart1.addEventListener("mouseleave",function(){
    fpart1.style.backgroundColor = "lightgoldenrodyellow";
    hp.style.color = "black";
    mainh.innerHTML = "Dr.A.P.J.Abdul Kalam Technical University Uttar Pradesh, Lucknow ";
})
fpart2.addEventListener("click",function(){
    fpart2.style.backgroundColor = "white";
    ha.style.color = "green";
    mainh.innerHTML = "--> Please Fill The all details correctly <--";
    mainh.style.color = "red";
})
fpart2.addEventListener("mouseleave",function(){
    fpart2.style.backgroundColor = "lightgoldenrodyellow";
    ha.style.color = "black";
    mainh.innerHTML = "Dr.A.P.J.Abdul Kalam Technical University Uttar Pradesh, Lucknow ";
})
fpart3.addEventListener("click",function(){
    fpart3.style.backgroundColor = "white";
    hd.style.color = "green";
    mainh.innerHTML = "--> Please Fill The all details correctly <--";
    mainh.style.color = "red";
})
fpart3.addEventListener("mouseleave",function(){
    fpart3.style.backgroundColor = "lightgoldenrodyellow";
    hd.style.color = "black";
    mainh.innerHTML = "Dr.A.P.J.Abdul Kalam Technical University Uttar Pradesh, Lucknow ";
})
bpage.addEventListener("click",function(){
    bpage.style.backgroundColor = "lightgoldenrodyellow";
    go.style.color = "red";
    mainh.innerHTML = "Dr.A.P.J.Abdul Kalam Technical University Uttar Pradesh, Lucknow ";
})
bpage.addEventListener("mouseleave",function(){
    bpage.style.backgroundColor = "white";
    go.style.color = "black";
})
