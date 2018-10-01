const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll('.nav-item');
const chevron = document.createElement('img');
chevron.src = "./img/arrow.svg";



let showMenu = false;
menuBtn.addEventListener('click', toggleMenu);
navItems.forEach((item) => {
  item.addEventListener('mouseover', addArrow);
  item.addEventListener('mouseout', removeArrow);
})

function addArrow(e){
  console.log("designated!", this);
  this.insertBefore(chevron, this.childNodes[0]);
  chevron.classList.add('chevron');
  console.log(this.childNodes);
  
}

function removeArrow(){
  console.log('out!')
  this.removeChild(this.firstChild);
}

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'))
        // set menu state 
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'))
        showMenu = false;
    }
    console.log("menu!!");
}