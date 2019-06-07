var buffer=0;
var dummu;
var flag;
const vari=document.querySelector('.screen');
vari.innerHTML=buffer;


const button0=document.querySelector(".button0");
button0.addEventListener('click', function (){
    if(buffer===0)
    buffer=0;
    else
   buffer=buffer+'0';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});

const button1=document.querySelector(".button1");
button1.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'1';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button2=document.querySelector(".button2");
button2.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'2';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button3=document.querySelector(".button3");
button3.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'3';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button4=document.querySelector(".button4");
button4.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'4';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button5=document.querySelector(".button5");
button5.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'5';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button6=document.querySelector(".button6");
button6.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'6';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button7=document.querySelector(".button7");
button7.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'7';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button8=document.querySelector(".button8");
button8.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'8';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const button9=document.querySelector(".button9");
button9.addEventListener('click', function (){
    if(buffer===0)
    buffer=" ";
   buffer=buffer+'9';

   const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
});
const buttonC=document.querySelector('.buttonClear');
buttonC.addEventListener('click', function(){
    buffer=0;

    const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
})
const buttonBackspace=document.querySelector('.button-backspace');
buttonBackspace.addEventListener('click', function(){
    const dummy=buffer % 10;
    buffer=(buffer - dummy)/10;

    const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
})
const buttonMultiply=document.querySelector('.button-multiply')
buttonMultiply.addEventListener('click', function(){
    dummu=buffer;
    buffer=0;
    flag='multiply'
})
const buttonAddition=document.querySelector('.button-plus')
buttonAddition.addEventListener('click', function(){
    dummu=buffer;
    buffer=0;
    flag='addition'
})
const buttonSubtraction=document.querySelector('.button-subtract')
buttonSubtraction.addEventListener('click', function(){
    dummu=buffer;
    buffer=0;
    flag='subtraction'
})
const buttonDivide=document.querySelector('.button-divide')
buttonDivide.addEventListener('click', function(){
    dummu=buffer;
    buffer=0;
    flag='divide'
})
const buttonEquals=document.querySelector('.button-equals')
buttonEquals.addEventListener('click', function(){
    if(flag==='multiply')
    buffer=dummu*buffer
    else  if(flag==='addition')
    buffer=Number(dummu) + Number(buffer)
    else  if(flag==='subtraction')
    buffer=dummu-buffer
    else
    buffer=dummu/buffer
    const vari=document.querySelector('.screen');
   vari.innerHTML=buffer;
   buffer=0;
   dummu=0;
})