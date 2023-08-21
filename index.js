const circle=document.querySelector('.circle');
const navlinks=document.querySelector('.portfolio-header-tags');
const headlinks=document.querySelectorAll('.head-links');
const menuicon=document.getElementById("menu-icon");

window.addEventListener('mousemove',(e)=>{
    circle.style.top=e.pageY+"px";
    circle.style.left=e.pageX+"px";
    
})

headlinks.forEach(link=>{
    link.addEventListener('mouseleave',()=>{
        circle.classList.remove('link-grow');
    });
    link.addEventListener('mouseover',()=>{
        circle.classList.add('link-grow');
    });
});
// header
menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle('close');
    navlinks.classList.toggle('open');
})
// arrow function
const arrow=document.querySelector('.arrow');
window.onscroll=()=>{
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
        arrow.style="position:fixed";
    }
    else{
        arrow.style="display:none";
    }
}
// Typing effect
const words=["Web Developer","C++ Programmer","Student"];
const dynamicText=document.querySelector(".intro-changing-text");
let wordIndex=0;
let charIndex=0;
let isDeleting=false;

const typeEffect=()=>{
    const currentWord=words[wordIndex];
    const currentChar=currentWord.substring(0,charIndex);
    dynamicText.textContent=currentChar;

    if(!isDeleting && charIndex<currentWord.length){
        charIndex++;
        setTimeout(typeEffect,200);
    }
    else if(isDeleting && charIndex>0){
        charIndex--;
        setTimeout(typeEffect,100);
    }
    else{
        isDeleting=!isDeleting;
        wordIndex=!isDeleting?(wordIndex+1)%words.length:wordIndex;
        setTimeout(typeEffect,1200);
    }
    
}
typeEffect();


const observer=new IntersectionObserver((entires)=>{
    entires.forEach((entry)=> {
    
        entry.target.classList.toggle("show",entry.intersectionRatio)
    });
})

const hiddenElements=document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));