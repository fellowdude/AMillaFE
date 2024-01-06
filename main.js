var toggleMenu = false;

function scrollToSection(link) {
    document.getElementById(link).scrollIntoView({behavior: 'smooth'});
}

function scrollToSectionMobile(link) {
    document.getElementById(link).scrollIntoView({behavior: 'smooth', top: 500});
    toggleMobileMenu();
}

function toggleMobileMenu() {
    if(!toggleMenu){
        //document.getElementById('slideout-menu').style.display = 'block';
        document.getElementById('slideout-menu').classList.add('toggle-on');
        document.getElementById('bars').style.display = 'none';
        document.getElementById('times').style.display = 'block';
    }  else {
        //document.getElementById('slideout-menu').style.display = 'none';
        document.getElementById('slideout-menu').classList.remove('toggle-on');
        document.getElementById('bars').style.display = 'block';
        document.getElementById('times').style.display = 'none';
    }
    toggleMenu = !toggleMenu;
}

function submitForm() {
    var frm = document.getElementById('contact-form');
    frm.reset();
    
    document.getElementById('answer').style.opacity = 1;

    setTimeout(()=>{
        document.getElementById('answer').style.opacity = 0;
    },2000);

    return false;
}