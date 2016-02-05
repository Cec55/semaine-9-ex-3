var liste = document.getElementById("liste");
var $supprimer = document.getElementById("supprimer");
var $restaurer = document.getElementById("restaurer");

function select(e) {
    e.target.classList.toggle("selected");
}

function supprimer() {
    for (var i = 0; i < liste.children.length; i++) {
        if (liste.children[i].classList.contains("selected")) {
            liste.children[i].classList.add("poubelle");
        }
    }
}

function restaurer() {
    for (var i = 0; i < liste.children.length; i++) {
        liste.children[i].classList.remove("poubelle");
    }
}

liste.onclick = select;
$supprimer.onclick = supprimer;
$restaurer.onclick = restaurer;
