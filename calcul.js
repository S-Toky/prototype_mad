document.addEventListener("click", function () {
    
    var curcuma = document.getElementById("panier1");
    var gingembre = document.getElementById("panier2");
    var muscade = document.getElementById("panier3");
    var baobab = document.getElementById("panier4");
    var fsv = document.getElementById("panier5");
    var fsb = document.getElementById("panier6");
    var voatsipy = document.getElementById("panier7")
    var pani = document.getElementById("pani");



    var str = pani.innerHTML;
    var sp = document.getElementById("panier");
    for (var i = 0; i < sp.length; i++) {
        if (sp[i].style.backgroundColor != "") {
            sp[i].setAttribute("back", sp[i].style.backgroundColor);
        }
        if (sp[i].getAttribute("style") != null) {
            str = str.replace(sp[i].outerHTML, sp[i].innerHTML);
        }
    }
    pani.innerHTML = str;

});
