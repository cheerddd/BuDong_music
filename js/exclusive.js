const prev = document.querySelector("#prev"); //选择后退组件
const next = document.querySelector("#next"); //选择前进组件

const slides = document.querySelectorAll(".slide"); //选择所有幻灯片组件，即slides为存储所有幻灯片组件的数组

var currentIndex = 0; //定义当前正在播放的幻灯片的数组下标

var autoPlay = true; //定义是否自动播放
var forward = true; //定义是否向前播放
var interval = 5000; //定义播放间隔5s

if (autoPlay) {
  //处理函数
  setInterval(forward ? handleNextClicked : handlePrevClicked, interval);
}
//给next按钮注册时间监听处理函数
next.addEventListener("click", handleNextClicked);
//添加事件处理函数
function handleNextClicked() {
  let current = slides[currentIndex];
  current.classList.remove("current"); //去掉current属性，让它不是第一张
 
  currentIndex++; //移动到下一张
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  slides[currentIndex].classList.add("current");
}

//给prev按钮注册时间监听处理函数
prev.addEventListener("click", handlePrevClicked);
//添加事件处理函数
function handlePrevClicked() {
  let current = slides[currentIndex];
  current.classList.remove("current"); //去掉current属性，让它不是第一张

  currentIndex--; //移动到上一张
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  slides[currentIndex].classList.add("current");
}
