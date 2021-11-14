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
const fileName =document.querySelector(".fileName");

inpFile.addEventListener('change',(e)=>{
   fileName.innerHTML = e.target.files[0].name;
})
myForm.addEventListener('submit',e=>{
    e.preventDefault();
    const endpoint = "upload.php";
    const formData =new FormData();
    formData.append("inpFile",inpFile.files[0]);  
    fetch(endpoint,{
        method: "POST",
        body: formData
    })
});//stop redirecting / refrreshing

const btn = document.querySelector(".fa-cloud-upload-alt");
btn.addEventListener("click",()=>{
    setTimeout(()=>{
        fileName.innerHTML = ""
        alert("Đã Gửi !")
    },500)
})


//Form
const myForm2 = document.getElementById('myForm2')

myForm2.addEventListener('submit',function(e){
    e.preventDefault();
    const formData2 = new FormData(this);
    fetch('report.php',{
        method:"POST",
        body: formData2
    }).then(function(response){
        return response.text();
    }).then(function(text){
        console.log(text);
    }).catch(function(error){
        console.error(error)
    })
})