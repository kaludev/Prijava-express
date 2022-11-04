//responsive
let login = document.querySelector('.login').querySelector('.row');
let image = document.querySelector('.navbar-image');
let imageLoginDiv = login.querySelector('.loginImage')
document.querySelector('.navbar-brand').removeChild(image);
login.removeChild(imageLoginDiv);

let checkWidth = () => {
    if(window.innerWidth >992){
        if(document.querySelector('.loginImage') == null){
            login.insertBefore(imageLoginDiv,document.querySelector('.form'));
            if(document.querySelector('.navbar-brand').querySelector('.navbar-image') != null){
            document.querySelector('.navbar-brand').removeChild(image);
            }
        }
    }else{
        if(document.querySelector('.navbar-image') == null){
            document.querySelector('.navbar-brand').insertBefore(image,document.querySelector('.navbar-brand').querySelector('span'));
            if(login.querySelector('.loginImage') != null){
                login.removeChild(imageLoginDiv);
            }
        }
        
    }
}
checkWidth();
window.addEventListener('resize',checkWidth)

// login/register switch
/*
let loginBtn = document.querySelector('#loginBtn');
let registerBtn = document.querySelector("#registerBtn");*/
let form = document.querySelector('form')/*
let Name = document.querySelector('#Name');
let sName = document.querySelector('#name').parentNode.parentNode;
let username = document.querySelector('#Username').parentNode;
let passwordNode = document.querySelector('#Password2').parentNode.parentNode;
let password  = document.querySelector('#Password2').parentNode
form.removeChild(sName);
form.removeChild(username);
passwordNode.removeChild(password)
document.querySelector('#Password').parentNode.classList.remove('col-5');
//Event listeners

loginBtn.addEventListener('click',()=>{
    if(!loginBtn.classList.contains('active')){
        Name.textContent = "Login"
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        form.removeChild(sName);
        form.removeChild(username);
        passwordNode.removeChild(password)
        document.querySelector('#Password').parentNode.classList.remove('col-5');
        document.querySelector('.button').textContent = "LOG IN";
    }
}
)
registerBtn.addEventListener('click', () =>{
    if(!registerBtn.classList.contains('active')){
        Name.textContent = "Register";
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        form.insertBefore(sName,form.querySelector('#Email1').parentNode);
        form.insertBefore(username,form.querySelector('#Email1').parentNode);
        document.querySelector('#Password').parentNode.classList.add('col-5');
        passwordNode.appendChild(password)
        document.querySelector('form button').textContent = "REGISTER";
    }
})
*/
form.onsubmit = async event =>{
    event.preventDefault();
    const Name = document.querySelector('#name');
    const mail = document.querySelector('#Email1');
    const pasword = document.querySelector('#Password');
    try{
        const body = {
            email:mail.value,
            password: pasword.value,
            name : Name.value
        }
        const res = await fetch('/api/users',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:body
        })
        const json = await res.json();
        if(!json.ok){
            new Error(json.message)
        }
        alert(res.message)
    }catch(error){
        alert(error.message)
    }
}
/*
async function register(fName,lName,userN,mail,pasword) {
    console.groupCollapsed();
	try {
        const userData = {
            firstName:fName,
            lastName:lName,
            username:userN,
            email: mail,
            password:pasword
        }
		const url = "http://localhost:8080/api/v1/registration";
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(userData)
		}
		const response = await fetch(url, options)
        console.log(response)
		const json = await response.json();
        console.log(json.message)
		if(!response.ok) throw new Error(json.message);
	} catch (error) {
		console.error(error);
	}
    console.groupEnd()
}

document.querySelector('form').querySelector('button').addEventListener('click',() =>{
    
    if(registerBtn.classList.contains('active')){
            fName = document.querySelector('#name').value;
            lName = document.querySelector('#surname').value;
            userN = document.querySelector('#Username').value;
            mail = document.querySelector('#Email1').value;
            pasword = document.querySelector('#Password').value;
            register(fName,lName,userN,mail,pasword);
    }else{
        location.href = './assets/pages/main.html';
    }
})
*/

