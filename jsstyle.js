let i =document.getElementById('menu');
// console.log(isss);
let m =document.getElementsByClassName('navbarmedia');
// console.log(m)
m[0].style.display = "none";

let isOpen = false; // close

i.addEventListener('click', function() {
    // console.log('click')
    if(isOpen) {
        // open
        m[0].style.display = "none";
        isOpen=false;
    } else {
        m[0].style.display = "flex";
        isOpen = true;
    } 
})
