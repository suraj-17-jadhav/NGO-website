const form = document.querySelector('form');
const select=document.getElementById('sel1');
const orgnaizationName= document.getElementById('form6Example3');
const address = document.getElementById('form6Example4');
const city =document.getElementById('form6Example1');
const pinCode = document.getElementById('form6Example2');
const fullName=document.getElementById('form6Example5');
const mobNo = document.getElementById('mobNo');
const email = document.getElementById('email');
const textArea = document.getElementById('form6Example7');

const errorOrgName=document.getElementById('errorOrgName');
const errorName=document.getElementById('errorName');
const errorMob=document.getElementById('errorMob');
const errorEmail=document.getElementById('errorEmail');
const errorCity=document.getElementById('errorCity');
const errorAdd=document.getElementById('errorAdd');
const errorPin=document.getElementById('errorPin');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(orgnaizationName.value==="" || address.value==="" || pinCode.value==="" || fullName.value==="" || mobNo.value==="" || email.value==="" || city.value===""  )
    {
 
     if(orgnaizationName.value===""){
         errorOrgName.innerText="Please Enter Oragnization Name";
     }
     else{
         errorOrgName.innerText="";
     }
     if(fullName.value===""){
         errorName.innerText="Please Enter Full Name";
     }
     else{
         errorName.innerText="";
     }
     if(mobNo.value===""){
         errorMob.innerText="Please Enter Mobile number";
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
     
     if(city.value===""){
         errorCity.innerText="Please Enter Your City";
     }
     else{
         errorCity.innerText="";
     }
     if(pinCode.value===""){
         errorPin.innerText="Please Enter Pincode";
     }
     else{
         errorPin.innerText="";
     }
     if(address.value===""){
         errorAdd.innerText="Please Enter Your address";
     }
     else{
         errorAdd.innerText="";
     }
 }
 else{
    console.log(select.value,orgnaizationName.value,address.value,city.value,pinCode.value,fullName.value,mobNo.value,email.value,textArea.value)
    
    
    db.collection('DonateForm').add({
        DonationType:select.value,
        orgnaizationName:orgnaizationName.value,
        address:address.value,
        city:city.value,
        pinCode:pinCode.value,
        fullName:fullName.value,
        mobNo:mobNo.value,
        email:email.value,
        textArea:textArea.value,
    })
    .then((data)=>{
        console.log('successfull',data)
    })

    alert("Form Submitted Successfully.\nThank You!")
    orgnaizationName.value="";
    address.value="";
    city.value="";
    fullName.value="";
   
    mobNo.value="";
    textArea.value="";
    email.value="";
    pinCode.value="";

    errorName.innerText="";
    errorAdd.innerText="";
    errorCity.innerText="";
    errorEmail.innerText="";
    errorMob.innerText="";
    errorOrgName.innerText="";
    errorPin.innerText="";

 }
})
