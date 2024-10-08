
var header = document.getElementById ('header');
var nagivation_header = document.getElementById ('nagivation_header');
var content = document.getElementById ('content');
var showSidebar = false;

function toggleSidebar () {
    showSidebar = !showSidebar;
    if(showSidebar){
        nagivation_header.style.marginLeft = '-10vw';
        nagivation_header.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        nagivation_header.style.marginLeft = '-100vw';
        nagivation_header.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {

    if(showSidebar){
        toggleSidebar()
    }
}

window.addEventListener('resize', function (event){
    if(window.innerHeight > 768 && showSidebar){
        toggleSidebar();
    }
});