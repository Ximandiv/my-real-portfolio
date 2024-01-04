'use strict'

// Open the sidebar
function openNav() {
    let buttonSidebar = document.getElementById("sidebarButton");

    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";

    buttonSidebar.classList.remove("openbtn");
    buttonSidebar.classList.add("closebtn");

    buttonSidebar.setAttribute("onclick", "closeNav()");
}

// Close the sidebar
function closeNav() {
    let buttonSidebar = document.getElementById("sidebarButton");

    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";

    buttonSidebar.classList.add("openbtn");
    buttonSidebar.classList.remove("closebtn");

    buttonSidebar.setAttribute("onclick", "openNav()");
}

function wipAlert(){
    alert("Currently, this page is being worked on. Soon, I'll bring this content for you!");
}