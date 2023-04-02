array=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const buton = document.getElementById("buton");
const color = document.querySelector(".color");

buton.addEventListener("click",function(){
    let hexcolor="#";
    for(let i= 0; i<6; i++){
        hexcolor += array[randomnumber()];
    }
    color.textContent = hexcolor;
    document.body.style.backgroundColor = hexcolor;
    

});

function randomnumber(){
    return Math.floor(Math.random() * array.length);
}
