function initialize() {

    const headerMenuIconOpen = document.getElementById("icon-open");
    headerMenuIconOpen.addEventListener("click", showSideMenu);
    const headerMenuIconClose = document.getElementById("icon-close");
    headerMenuIconClose.addEventListener("click", closeSideMenu);

}

function showSideMenu() {

    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("side-menu-open");
    sideMenu.classList.remove("side-menu-close");

}

function closeSideMenu() {

    const sideMenu = document.getElementById("side-menu");
    sideMenu.classList.add("side-menu-close");
    sideMenu.classList.remove("side-menu-open");

}

initialize();