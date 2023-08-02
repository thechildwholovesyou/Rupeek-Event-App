let registerForm=document.getElementById('register-form');
let loginForm=document.getElementById('login-form');
let baseUrl='http://localhost:8000/api/user';

if(localStorage.getItem("userToken")){
    console.log(localStorage.getItem("userToken"), "hahaha");
    window.location.href="http://127.0.0.1:5501/Frontend/event.html";
}


registerForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let firstName=document.getElementById('fname1').value;
    let lastName=document.getElementById('lname1').value;
    let email=document.getElementById('email1').value;
    let city=document.getElementById('city').value;
    let password=document.getElementById('password1').value;
    // console.log(firstName.value,lastName.value,email.value,password.value,city.value);
    axios.post(baseUrl,{firstName,lastName,email,city,password},{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=>{
        console.log(res);
        alert("Registration successful");
    })
    .catch((err)=>{
        alert("Something went wrong");
        console.log(err);
    });
    // console.log("clicked");
    document.getElementById('fname1').value=""
    document.getElementById('lname1').value=""
    document.getElementById('email1').value=""
    document.getElementById('city').value=""
    document.getElementById('password1').value=""
})

document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const interestsSelect = document.getElementById('interests');
    const selectedInterests = Array.from(interestsSelect.selectedOptions).map(option => option.value);
    formData.append('interests', selectedInterests.join(',')); // Assuming interests are stored as a comma-separated string in the database
  
  
  });
  

// Login
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let email=document.getElementById('email2').value;
    let password=document.getElementById('password2').value;
    // console.log(firstName.value,lastName.value,email.value,password.value,city.value);
    axios.post(baseUrl+'/login',{email,password},{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=>{ 
        console.log(res.data.Token);
        localStorage.setItem("userToken",res.data.Token);
        alert("Login successful");
        window.location.href="http://127.0.0.1:5501/Frontend/event.html";
    })
    .catch((err)=>{
        alert("Something went wrong");
        console.log(err);
    });
    // console.log("clicked");
    document.getElementById('email2').value=""
    document.getElementById('password2').value=""
})