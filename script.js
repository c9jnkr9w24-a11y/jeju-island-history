document.addEventListener('DOMContentLoaded',()=>{
 const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
 if(toggle&&nav){toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));toggle.textContent=opened?'×':'☰';});}
 const en=document.getElementById('btn-en'),ko=document.getElementById('btn-ko');
 function setLanguage(lang){
   document.documentElement.lang=lang;
   document.querySelectorAll('[data-en]').forEach(el=>{
     const val=lang==='ko'&&el.hasAttribute('data-ko')?el.getAttribute('data-ko'):el.getAttribute('data-en');
     if(val!==null)el.innerHTML=val;
   });
   if(en)en.classList.toggle('active',lang==='en');
   if(ko)ko.classList.toggle('active',lang==='ko');
   try{localStorage.setItem('jeju-language',lang)}catch(e){}
 }
 if(en)en.addEventListener('click',()=>setLanguage('en'));
 if(ko)ko.addEventListener('click',()=>setLanguage('ko'));
 let language='en';try{language=localStorage.getItem('jeju-language')||'en'}catch(e){}
 setLanguage(language);
 const current=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active')});
});