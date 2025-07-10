const hero = document.getElementsByClassName("hero-section")[0];
const heroBtn = document.getElementsByClassName("hero-btn")[0];
let lastScroll = 0;

// window.onload = () => {
//   window.scrollTo(0, 0);
// };

window.addEventListener("wheel", (e) => {
  const scrollY = window.scrollY;

  if (e.deltaY > 1) {
    if (scrollY > -1) {
      hero.style.transform = "translateY(-100%)";

      setTimeout(() => {
        document.body.classList.remove("overflow-hidden");
        document.body.classList.add("overflow-auto");
      }, 1000);
    }
  } else if (e.deltaY < 1) {
    if (scrollY === 0) {
      hero.style.transform = "translateY(0%)";

      setTimeout(() => {
        document.body.classList.remove("overflow-auto");
        document.body.classList.add("overflow-hidden");
      }, 1000);
    }
  }
});

window.addEventListener("scroll", (e) => {
  const currentScroll = window.scrollY;

  if (currentScroll === 0) {
    hero.style.transform = "translateY(0%)";

    setTimeout(() => {
      document.body.classList.remove("overflow-auto");
      document.body.classList.add("overflow-hidden");
    }, 1000);
  }
});

heroBtn.addEventListener("click", () => {
  hero.style.transform = "translateY(-100%)";

  setTimeout(() => {
    document.body.classList.remove("overflow-hidden");
    document.body.classList.add("overflow-auto");
  }, 1000);
});
