var burger = document.querySelector(".burger");
var navMenu = document.querySelector(".nav-menu");
var navMenuItems = document.querySelectorAll(".nav-menu li");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");                   //每次点击的时候按钮会加上active 再次点击的时候会去掉active
  navMenu.classList.toggle("open");
  navMenuItems.forEach((item, index) => {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 + 0.3}s`;
    }
  }); 
});
