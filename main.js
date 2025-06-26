// loader:

const loader = document.getElementById("preloader");
window.addEventListener('load',()=>{
    loader.style.display = "none"
    loader.style.overflow = "hidden"
})

// nav-bar
function toggleMenu() {
  const menu = document.getElementById("nav-links");
  menu.classList.toggle("show");
}
// nav-bar-end()


  window.addEventListener('scroll', showOnScroll);

function showOnScroll() {
  const boxes = document.querySelectorAll('.box');
  const triggerBottom = window.innerHeight - 150;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}



/* not working the developer options  */
document.addEventListener('contextmenu',(event)=>{
  event.preventDefault();
});
/* not working the developer options-end()  */







