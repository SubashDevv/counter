let plus=document.querySelector("#plus");
let minus=document.querySelector("#minus");
let clear=document.querySelector("#clear");
let num=document.querySelector("#num");
let count=0;
let screen=(N)=>{
    console.log(N);
    num.innerText=N;
}
plus.addEventListener("click",()=>
{
count+=1;
screen(count);

})
minus.addEventListener("click",()=>
    {
    count-=1;
    screen(count);
})
clear.addEventListener("click",()=>
    {
    count=0;
    screen(count);
})

