//Denisha Kyla Azzahra (123210130)
responsiveness();
window.onresize=function(event){
    responsiveness();
};
function responsiveness(){
    var x = window.matchMedia("(max-width: 768px)")
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    var navbar1 = document.getElementById("header");
    var sticky1 = navbar1.offsetTop;
    const check=document.getElementById("check");
    if(!x.matches){
        navbar1.classList.remove("sticky");
        check.innerHTML="";
        window.onscroll = function() {myFunction()};
        function myFunction() {
            if (window.scrollY > sticky) {
                navbar.classList.add("sticky")
            } else {
                navbar.classList.remove("sticky");
            }
        }
    }
    else{
        navbar.classList.remove("sticky");
        check.innerHTML="<br><br><br><br>";
        window.onscroll = function() {myFunction1()};
        function myFunction1() {
            if (window.scrollY > sticky1) {
                navbar1.classList.add("sticky")
            } else {
                navbar1.classList.remove("sticky");
            }
        }
        const navbarItem = document.querySelector("#navbar-group");
        navbarItem.addEventListener("click", function () {
            const navbarGroup = document.querySelector("#navbar-group");
            navbarGroup.classList.toggle("navbar-group-close");
        });
    }
}
const navbarIcon = document.querySelector("#navbar-icon");
navbarIcon.addEventListener("click", function () {
    const navbarGroup = document.querySelector("#navbar-group");
    navbarGroup.classList.toggle("navbar-group-close");
});
