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
// const myForm2 = document.getElementById('myForm2')

// myForm2.addEventListener('submit',function(e){
//     e.preventDefault();
//     const formData2 = new FormData(this);
//     fetch('report.php',{
//         method:"POST",
//         body: formData2
//     }).then(function(response){
//         return response.text();
//     }).then(function(text){
//         console.log(text);
//     }).catch(function(error){
//         console.error(error)
//     })
// })
let recentBtn = document.querySelector(".recentBtn");
let content = document.querySelector(".recentReport_container")
recentBtn.addEventListener("click",()=>{
    content.style.display ="flex"
})
var flag = 0;
let reciverTitle = document.querySelectorAll(".rp_box_title");
let reciverLocation = document.querySelectorAll(".rp_box_location");
let reciverDate = document.querySelectorAll(".rp_box_date");

 let inputs = [];
        // example {id:1592304983049, title: 'Deadpool', year: 2015}
        const addInput = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let input = {
                id: Date.now(),
                inp_name: document.getElementById('inp_name').value,
                inp_number: document.getElementById('inp_number').value,
                inp_email: document.getElementById('inp_email').value,
                inp_location: document.getElementById('inp_location').value,
                inp_date: document.getElementById('inp_date').value,
                inp_description: document.getElementById('inp_description').value,
                inp_link: document.getElementById('inp_link').value,
                dot1: document.getElementById('dot-1').value,
                dot2: document.getElementById('dot-2').value,
                dot3: document.getElementById('dot-3').value,
            }
            inputs.push(input);
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            addJSONtoRecent(inputs,flag);
            if (flag < reciverLocation.length-1){
                flag++;
            }
            //saving to localStorage
            localStorage.setItem('UserInputs', JSON.stringify(inputs));
        }
document.getElementById('button').addEventListener('click', addInput);


    

function addJSONtoRecent(inputs,flag){
    console.log(inputs)
      let i =flag;
    if(flag == reciverLocation.length){
         i  = reciverLocation.length-1
    }
        reciverTitle[i].innerHTML = inputs[flag].inp_description;
        reciverLocation[i].innerHTML = `Location: ${inputs[flag].inp_location}`;
        reciverDate[i].innerHTML = `Date: ${inputs[flag].inp_date}`;
}
