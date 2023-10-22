const firstName=document.getElementById('form6Example1');
const lastName=document.getElementById('form6Example2');
const org = document.getElementById('form6Example3');
const address = document.getElementById('form6Example4');
const email = document.getElementById('form6Example5');
const phone = document.getElementById('form6Example6');
const textArea=document.getElementById('form6Example7');
const form =document.getElementById('form');
const help =document.getElementById('help');

const errorOrgName=document.getElementById('errorOrgName');
const errorNameF=document.getElementById('errorNameF');
const errorNameL=document.getElementById('errorNameL');
const errorMob=document.getElementById('errorMob');
const errorEmail=document.getElementById('errorEmail');

const errorAdd=document.getElementById('errorAdd');


let radioValue;
help.addEventListener('click',(e)=>{
    if(e.target.classList.contains('radioInp')){
        radioValue = e.target.nextElementSibling.innerHTML;
        console.log(radioValue)
        }
})
form.addEventListener('submit',(e)=>{
    e.preventDefault();


    if(org.value==="" || address.value==="" || firstName.value==="" || lastName.value==="" || phone.value==="" || email.value==="" )
    {
 
     if(org.value===""){
         errorOrgName.innerText="Please Enter Oragnization Name";
     }
     else{
         errorOrgName.innerText="";
     }
     if(firstName.value===""){
         errorNameF.innerText="Please Enter First Name";
     }
     else{
         errorNameF.innerText="";
     }
     if(lastName.value===""){
        errorNameL.innerText="Please Enter Last Name";
    }
    else{
        errorNameL.innerText="";
    }
     if(phone.value===""){
         errorMob.innerText="Please Enter Phone number";
     }
     else{
         errorMob.innerText="";
     }
     if(email.value===""){
         errorEmail.innerText="Please Enter Email address";
     }
     else{
         errorEmail.innerText="";
     }

     if(address.value===""){
         errorAdd.innerText="Please Enter Your address";
     }
     else{
         errorAdd.innerText="";
     }
 }
 else{

    db.collection('volentreeForm').add({
       firstName:firstName.value,
       lastName:lastName.value,
       org:org.value,
       address:address.value,
       email:email.value,
       phone:phone.value,
       info:textArea.value,
       HowOffentHelp:radioValue
    })
    .then(()=>{
        console.log('form submiited sucsessfully')
    })

    alert("Form Submitted Successfully.\nThank You!")

    firstName.value="";
    lastName.value="";
    org.value="";
    address.value="";
    email.value="";
    phone.value="";
    textArea.value="";

    errorNameF.innerText="";
    errorNameL.innerText="";
    errorAdd.innerText="";
    errorEmail.innerText="";
    errorMob.innerText="";
    errorOrgName.innerText="";

}
   


})

