let f1 = document.forms.form1;
console.log(f1);
let f2 = document.forms.form2;
let val = f2.elements["inp"].value;
console.log(val);
let checkbox = f2.elements.textt;
let chek = f1.elements.chek;
document.querySelector('.but').addEventListener('click',function(){
    let val = f2.elements['inp'].value;
    let addtask = f1;
    let f = f1.elements;
    let p = document.createElement('p');
    let inp = document.createElement('input');
    inp = className = "textt";
    p = className = "text";
    inp = type = "checkbox";
    
    if(val === '') document.querySelector('.error1').style.display = "block";
    else{
        f2.elements['inp'].value;
        addtask.innerHTML+=`<p class="t"><input class="textt" name="chek" id="one" type="checkbox">${val}</p>`;
        f[0].disabled = false;  
        f2.inp.value = ''
    }
})

f1.addEventListener('click',function(){
    let f = f1.elements;
        for(const ez of document.getElementsByClassName('t')){
            ez.addEventListener('click',function(){
            if(event.target.className === 'textt'){
                this.parentNode.removeChild(this);
            }
            if(f.length === 1){
                 f[0].disabled = true;        
                 document.querySelector('.error2').style.display = "block";
            }
        })

    }
})

document.querySelector('.er1').addEventListener('click',function(){
    document.querySelector('.error1').style.display = "none";
})
document.querySelector('.er2').addEventListener('click',function(){
    document.querySelector('.error2').style.display = "none";
})










