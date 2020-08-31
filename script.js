let listBtn = document.querySelector(".list-btn");
let list = document.querySelector(".list");

listBtn.addEventListener("click", function () {
  list.classList.toggle("active");
});

let headerImages = [
  "images/header-img1.jpg",
  "images/header-img2.jpg",
  "images/header-img3.jpg",
];
let i = 0;
function mySlider() {
  document.querySelector(".header-img").src = headerImages[i];
  if (i < headerImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("mySlider()", 5000);
}
mySlider();

let moreContent = document.querySelector(".more-content");
// let courseBtn = document.querySelectorAll(".course-btn");
let courseImg = document.querySelectorAll(".course-img");
let moreImg = document.querySelector(".more-img");

let courseBtn = document.getElementsByClassName("course-btn");
for (let i = 0; i < courseBtn.length; i++) {
  // const element = array[i];
  courseBtn[i].addEventListener("click", function (event) {
    let button = event.target;
    button = moreContent.classList.add("open");
    // let item = button.parentElement.parentElement;
    let item = courseBtn[i].parentElement;
    // console.log(button.parentElement.tagName);
    let courseTitles = item.querySelect(".course-title").innerText;
    item.querySelector(".more-title").innerText = courseTitles;
  });
}
/*
courseBtn.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let button = event.target;
    button = moreContent.classList.add("open");
    let item = button.parentElement;
    console.log(button.parentElement.tagName);
    let courseTitles = item.querySelect(".course-title").innerHTML;
    moreContent.querySelector(".more-title").innerHTML = courseTitles;
    // courseImg[0].src = item.getAttribute("src");
    // moreImg.src = item.courseImg[0].src;
  });
});

*/
moreContent.addEventListener("click", function (ev) {
  if (ev.target == ev.currentTarget) {
    this.classList.remove("open");
  }
  // if (!ev.target.className === "open") {
  //   this.classList.remove("open");
  // }
});
