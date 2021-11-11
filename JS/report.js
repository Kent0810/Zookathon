// const transtion_el = document.querySelector('.transition')
//     const anchors = document.querySelectorAll('.rpbtn')
//     transtion_el.classList.remove('is-active')
//     for (let i = 0;i<anchors.length;i++){
//         anchors[i].addEventListener('click',(e)=>{
//             transtion_el.classList.add('is-active')
//             e.preventDefault();
//             setTimeout(()=>{
//                 transtion_el.classList.remove('is-active')
//                 let target = e.target.href;
//                 window.location.href = target;
//             },500);
//         })
//     }
let toggle = document.querySelector(".fa-bars");
let sidebar = document.querySelector(".sidebar");
let x = document.querySelector(".fa-chevron-right");

toggle.addEventListener('click',()=>{
    sidebar.style.marginRight ="245px";
})
x.addEventListener("click",()=>{
    sidebar.style.marginRight ="-245px";
})

function InitialSlideIn(){
    const transtion_el = document.querySelector('.transition')
    setTimeout(()=>{
        transtion_el.classList.remove('is-active')
    },1000); 
}
InitialSlideIn();