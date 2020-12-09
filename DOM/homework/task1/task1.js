const cont= document.querySelector(".textBox")
const change= document.querySelectorAll(".textBox strong")

cont.addEventListener("mouseenter", function( ) {   
for(i of change){
  

i.style.color="green"
i.style.fontSize ="x-large"


}
});
cont.addEventListener("mouseleave", function( ) {   
for(i of change){
  

i.style.color="black"
i.style.fontSize ="medium"


}
});

// cont.addEventListener(, function( ) {   

// change.classList.remove('strong')


// mouseleave
// });

// console.log(change)











