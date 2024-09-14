const icon = document.querySelector('.icon').addEventListener('click', showSidebar);

const closeIcon = document.querySelector('.close-icon').addEventListener('click', hideSidebar);

const homePage = document.querySelector('#logo-home-page').addEventListener('click', navToHomepage);

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'
}

function navToHomepage(){
    window.location = "/index.html"; 
}