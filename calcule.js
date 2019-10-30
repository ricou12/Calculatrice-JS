/** *************************************************
 *                      JS
 ***************************************************** */
const valeurs;
const $input = document.getElementById("show");

function affichage(myEvent) {
    console.log(myevent);
    alert("ok");
    var value = myEvent.getAttribute("value");
    $input.innerHTML = value;
    valeurs
}