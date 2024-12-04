var arabic=document.getElementById(`arabic`);
var english=document.getElementById(`english`);
var project_text=document.getElementById(`project_text`);
var aboutfoot=document.getElementById(`aboutfoot`);
var aboutp=document.getElementById(`aboutp`);
var aboutmail=document.getElementById(`aboutmail`);
var title=document.getElementById(`title`);
var logo=document.getElementById(`logo`);
var footer_div=document.getElementById(`footer_div`);
var mainimage=document.getElementById(`mainimage`);



arabic.onclick=()=>{
    setLanguage(`arabic`);
    localStorage.setItem(`lang`,`arabic`);
};

english.onclick=()=>{
    setLanguage(`english`);
    localStorage.setItem(`lang`,`english`);
};

onload=()=>{
    setLanguage(localStorage.getItem(`lang`))
}

function setLanguage(getLanguage) {
    if (getLanguage===`arabic`) {
        title.innerHTML=`المبرمج يحيى`
        project_text.innerHTML=`هذا مشروع اختبار جافا سكريبت`;
        aboutfoot.innerHTML=`معلومات عنا `;
        aboutp.innerHTML=`أنا طالب في اكاديمية كودر شييار `;
        aboutmail.innerHTML=`اتصل بنا `;
        footer_div.innerHTML=`  2024 ©  جميع الحقوق محفوظة _ المبرمج يحيى `;
        section.style.direction=`rtl`;
        logo.style.float=`right`;
       
     

    } else if(getLanguage===`english`){
        title.innerHTML=`Coder Yahya`
        project_text.innerHTML=`This is a project for Javascript test`;
        aboutfoot.innerHTML=`About Us`;
        aboutp.innerHTML=`I am a student at Coder Shiyar Academy`;
        aboutmail.innerHTML=`Contact Us`;
        footer_div.innerHTML=`© 2024 Copyright Reserved _ Coder Yahya`;
        section.style.direction=`ltr`;
        logo.style.float=`left`;
        
    }
};









