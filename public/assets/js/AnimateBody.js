

setInterval(CreateBinary,20);
function CreateBinary() {
    let i = Math.round(Math.random()*window.innerWidth / (2 * parseFloat(getComputedStyle(document.documentElement).fontSize)));
    let element = document.createElement("div");
    element.classList.add('animate');
    element.innerText = Math.round(Math.random()).toString();
    element.style.left = Math.round(i* 2 * parseFloat(getComputedStyle(document.documentElement).fontSize))+'px';
    
    document.body.appendChild(element);
}

setInterval(()=> {
    document.querySelectorAll('.animate').forEach(binary =>{
       if(binary.getBoundingClientRect().bottom<0){
            console.log('removed')
            binary.remove();
       }
    })
},20)

