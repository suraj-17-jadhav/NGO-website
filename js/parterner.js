
const org = document.getElementById('form6Example3');
const address=document.getElementById('form6Example4');
const city = document.getElementById('form6Example1');
const pincode = document.getElementById('form6Example2');
const fullName = document.getElementById('form6Example5');
const phone = document.getElementById('mobNo');
const email =document.getElementById('email');
const form = document.getElementById('form');
const info=document.getElementById('form6Example7');
const errorOrgName=document.getElementById('errorOrgName');
const errorName=document.getElementById('errorName');
const errorMob=document.getElementById('errorMob');
const errorEmail=document.getElementById('errorEmail');
const errorCity=document.getElementById('errorCity');
const errorAdd=document.getElementById('errorAdd');
const errorPin=document.getElementById('errorPin');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(org.value==="" || address.value==="" || pincode.value==="" || fullName.value==="" || phone.value==="" || email.value==="" || city.value===""  )
   {

    if(org.value===""){
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
    
    if(city.value===""){
        errorCity.innerText="Please Enter Your City";
    }
    else{
        errorCity.innerText="";
    }
    if(pincode.value===""){
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
    db.collection('partnerForm').add({
        orgnaizationName:org.value,
        address:address.value,
        city:city.value,
        pincode:pincode.value,
        fullName:fullName.value,
        phone:phone.value,
        email:email.value,
        info:info.value
        
    }).then(()=>{
        console.log('form submitted')
    })

    alert("Form Submitted Successfully.\nThank You!")

    org.value="";
    city.value="";
    address.value="";
    pincode.value="";
    fullName.value="";
    phone.value="";
    email.value="";
    info.value="";

    errorName.innerText="";
    errorAdd.innerText="";
    errorCity.innerText="";
    errorEmail.innerText="";
    errorMob.innerText="";
    errorOrgName.innerText="";
    errorPin.innerText="";
}
})