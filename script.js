const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-links");
// 開閉
hamburger.addEventListener("click",() =>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});
// メニューのリンク押したら閉じる
menu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
    const clickedHamburger = hamburger.contains(e.target);
    const clickedMenu = menu.contains(e.target);

    if(!clickedHamburger && !clickedMenu){
        menu.classList.remove("active");
    }
});

const targets = document.querySelectorAll(".js-reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-show");
      observer.unobserve(entry.target); 　//  一回だけ
    }
  });
},{
  threshold:0.25　 // ~%見えたら発火
});
targets.forEach((target) => observer.observe(target));