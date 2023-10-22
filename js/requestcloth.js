const org = document.getElementById('form6Example3');
const website = document.getElementById('form6Example1');
const pincode = document.getElementById('form6Example2');
const address = document.getElementById('form6Example4');
const email = document.getElementById('form6Example5');
const phone = document.getElementById('form6Example6');
const textArea = document.getElementById('form6Example7');
const form=document.getElementById('form');

const errorOrgName=document.getElementById('errorOrgName');
const errorWeb=document.getElementById('errorWeb');
const errorMob=document.getElementById('errorMob');
const errorEmail=document.getElementById('errorEmail');
const errorAdd=document.getElementById('errorAdd');
const errorPin=document.getElementById('errorPin');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(org.value==="" || address.value==="" || pincode.value==="" ||  phone.value==="" || email.value===""  )
    {
 
     if(org.value===""){
         errorOrgName.innerText="Please Enter Oragnization or institute Name";
     }
     else{
         errorOrgName.innerText="";
     }
    
     if(phone.value===""){
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
     
     if(pincode.value===""){
         errorPin.innerText="Please Enter Pincode";
     }
     else{
         errorPin.innerText="";
     }
     if(address.value===""){
         errorAdd.innerText="Please Enter address of institution";
     }
     else{
         errorAdd.innerText="";
     }
 }
 else{

    db.collection('requestClothForm').add({
        orgnaizationName:org.value,
        website:website.value,
        pincode:pincode.value,
        address:address.value,
        email:email.value,
        phone:phone.value,
        info:textArea.value
    }).then(()=>{
        console.log('form submitted')
    })

    alert("Form Submitted Sucessfully.\nThank You!");

    org.value="";
    website.value="";
    pincode.value="";
    address.value="";
    email.value="";
    phone.value="";
    textArea.value="";

    errorAdd.innerText="";
    errorEmail.innerText="";
    errorMob.innerText="";
    errorOrgName.innerText="";
    errorPin.innerText="";
}
    
})