function menuInit(){
    var toggle = document.getElementById("menu-toggle");
    document.getElementById("nav-menu").style.display="none";
    toggle.addEventListener("click", function(e){
        var menu = document.getElementById("nav-menu");
        if(menu.style.display=="none") menu.style.display="block";
        else menu.style.display="none";
    });

    document.addEventListener("click", function(e){
        if(e.target.id != "menu-toggle" && e.target.parentNode.id != "menu-toggle"){
            document.getElementById("nav-menu").display="none";
        }
    });
}

window.addEventListener("load", menuInit);