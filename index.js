let toggle = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let x = document.querySelector(".fa-chevron-right");

toggle.addEventListener('click',()=>{
    sidebar.style.marginRight ="245px";
})
x.addEventListener("click",()=>{

    sidebar.style.marginRight ="-245px";
})

//reveal
window.addEventListener('scroll',reveal);


function reveal(){
    var reveals = document.querySelectorAll(".reveal");
    for(var i =  0;i<reveals.length;i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint =150;

        if(revealTop<windowHeight-revealPoint){
            reveals[i].classList.add('active');
        }
        //optional
        else{
            reveals[i].classList.remove('active');
        }
    }
}

//parallax effect
