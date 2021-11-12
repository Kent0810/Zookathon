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

const myForm =document.getElementById('myForm');
const inpFile =document.getElementById('inpFile');

myForm.addEventListener('submit',e=>{
    e.preventDefault();
    const endpoint = "upload.php";
    const formData =new FormData();
    // console.log(inpFile.files)
    formData.append("inpFile",inpFile.files[0]);  
    fetch(endpoint,{
        method: "POST",
        body: formData
    })



});//stop redirecting / refrreshing

const btn = document.querySelector(".fa-upload");
btn.addEventListener("click",()=>{
    setTimeout(()=>{
        alert("Đã Gửi !")
    },500)
})