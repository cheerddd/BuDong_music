// 导航加返回顶部按钮
const headerEL = document.querySelector("header");
const scrollToTop = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  let height = headerEL.getBoundingClientRect().height;//占屏幕空间区域的高度
  if (window.pageYOffset - height > 400) {
    if (!headerEL.classList.contains("sticky")) {
      headerEL.classList.add("sticky");
    }
  } else {
    headerEL.classList.remove("sticky");
  }

  if (window.pageYOffset > 1500) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
// 轮播组件引入glide
const glide = new Glide(".glide");
//标题
const captionsEL = document.querySelectorAll(".slide-caption");
//加载后和轮播后的监听事件
glide.on(["mount.after", "run.after"], () => {
  const caption = captionsEL[glide.index];//当前轮播下标
 //引入anime库
  anime({
    targets: caption.children,
    opacity: [0, 1],
    duration: 400,
    easing: "linear",
    delay: anime.stagger(400, { start: 300 }),//stagger函数孩子执行间隔400ms,child1执行前delay300ms
    translateY: [anime.stagger([40, 10]), 0],//沿着y轴偏离，依次从40-0、30-0、20-0、10-0
  });
});
//轮播前
glide.on("run.before", () => {
  document.querySelectorAll(".slide-caption > *").forEach((el) => {
    el.getElementsByClassName.opacity = 0;
  });
});
//自动加载
glide.mount();

//歌单分类引入isotope
const isotope = new Isotope(".cases", {
  layoutMode: "fitRows",//行模式布局，占满一行再换行
  itemSelector: ".case-item",//每个子节点
});

//筛选按钮
const filterBtns = document.querySelector(".filter-btns");

filterBtns.addEventListener("click", (e) => {
  let { target } = e;//被点击的按钮
  const filterOption = target.getAttribute("data-filter"); //选中的类别
  if (filterOption) {
    document
      .querySelectorAll(".filter-btn.active")
      .forEach((btn) => btn.classList.remove("active"));
    target.classList.add("active");
    isotope.arrange({ filter: filterOption });//isotope筛选方法
  }
});
 
//引入SmoothScroll
const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]', {
  header: "header",//固定导航
  offset: 40,
});

const exploreBtnEls = document.querySelectorAll(".explore-btn");

exploreBtnEls.forEach((exploreBtnEl) => {
  exploreBtnEl.addEventListener("click", () => {
    scroll.animateScroll(document.querySelector("#science"));
  });
});
 