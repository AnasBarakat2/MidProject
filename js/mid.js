var themeToggle = document.getElementById('theme');
 var body =document.body;

themeToggle.addEventListener('click',()=>{
    body.classList.toggle('dark-mode');
 })
