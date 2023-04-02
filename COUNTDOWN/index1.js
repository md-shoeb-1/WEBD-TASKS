let count =0;
// select value and buttons
const value = document.querySelector(".value");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");


increase.addEventListener("click",function(){
    count = count + 1;
    value.textContent = count;
    
    if(count>0){
        value.style.color = "green";
    };
    if(count<0){
        value.style.color = "red";
    };

});

decrease.addEventListener("click",function(){
    count = count -1;
    value.textContent = count;
    if(count>0){
        value.style.color = "green";
    };
    if(count<0){
        value.style.color = "red";
    };
});

reset.addEventListener("click",function(){
    count = 0;
    value.textContent = count;
    value.style.color = "black";
});





