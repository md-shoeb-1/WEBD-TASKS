const colors = ["red", "blue", "green", "pink","orange"];
const btn = document.getElementById("button");
const color= document.querySelector(".color");
// responsive button
btn.addEventListener("click",function(){
    const randomnumber = getrandomnumber();
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];

});

function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}