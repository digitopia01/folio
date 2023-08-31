// &:hover {
//     transform: rotateY(180deg);
//   }

let modal_scr = document.querySelector(".modal_scr");

window.addEventListener("load", () => {
  modal_scr.style.opacity = "1";
  setTimeout(() => {
    modal_scr.style.opacity = "0";
  }, 2000);
});

let todevfront = document.querySelector(".unflipped"),
  todevback = document.querySelector(".flipped"),
  flipping = document.querySelector(".flipping");

flipping.onmouseover = () => {
  flipping.style.transform = "rotateY(180deg)";
  todevfront.style.opacity = "0";
  todevback.style.display = "inline-block";
  todevback.style.opacity = "1";
};
flipping.onmouseout = () => {
  flipping.style.transform = "rotateY(0deg)";
  todevfront.style.opacity = "1";
  todevback.style.display = "inline-block";
  todevback.style.opacity = "0";
};

//scroll to page move

let currentpage = 0;
let isScrolling = false;

window.addEventListener("scroll", () => {
  if (!isScrolling) {
    let newScroll = window.scrollY;
    if (newScroll > scroll) {
      // Scrolling Down
      if (currentpage < 3) {
        let nextPage = currentpage + 1;
        scrollToPage(nextPage);
      }
    } else if (newScroll < scroll) {
      // Scrolling Up
      if (currentpage > 0) {
        let previousPage = currentpage - 1;
        scrollToPage(previousPage);
      }
    }

    scroll = newScroll;
  }
});

function scrollToPage(pageNumber) {
  isScrolling = true;
  window.scrollTo({
    top: window.innerHeight * pageNumber,
    behavior: "smooth",
  });
  currentpage = pageNumber;

  setTimeout(() => {
    isScrolling = false;
  }, 1000);
}

//definition topbutton, nav

let topbutton = document.querySelector(".top"),
  nav = document.querySelectorAll(".navA");

//top button animation

window.onscroll = () => {
  scroll = window.scrollY;
  if (scroll > 40) {
    topbutton.style.transform = "translateY(0px)";
  } else {
    topbutton.style.transform = "translateY(100px)";
  }
};

// Top button click event to scroll to top smoothly

topbutton.onclick = () => {
  window.scrollTo({
    top: (0, 0),
    behavior: "smooth",
  });
};

//nav buttons animation

function navcolor() {
  nav.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.borderBottom = "2px solid white";
      link.style.transition = "none";
    });

    link.addEventListener("mouseleave", () => {
      link.style.border = "none";
    });
  });
}

navcolor();

//nav circle scroll style

const navCircle = document.querySelectorAll(".navcircle");

window.addEventListener("load", () => {
  for (let i = 0; i < navCircle.length; i++) {
    navCircle[i].classList.add("navcircle");
  }
  navCircle[0].classList.add("navon");
  nav[0].style.fontSize = "20px";
});

window.addEventListener("scroll", () => {
  scroll = window.scrollY;
  console.log(scroll);

  if (scroll > 175 && scroll < 1300) {
    nav.forEach((link) => {
      link.style.color = "#333";
    });
    navCircle.forEach((link) => {
      link.style.borderColor = "#333";
    });
  } else {
    nav.forEach((link) => {
      link.style.color = "#fff";
      navCircle.forEach((link) => {
        link.style.borderColor = "#fff";
      });
    });
  }

  if (scroll >= 0 && scroll < window.innerHeight * 0.9) {
    for (let i = 0; i < navCircle.length; i++) {
      nav[i].style.fontSize = "12px";
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
    }
    navCircle[0].classList.add("navon");
    nav[0].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 0.91 &&
    scroll < window.innerHeight * 1.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      nav[i].style.fontSize = "12px";
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
    }
    navCircle[1].classList.add("navon");
    nav[1].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 1.91 &&
    scroll < window.innerHeight * 2.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      nav[i].style.fontSize = "12px";
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
    }
    navCircle[2].classList.add("navon");
    nav[2].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 2.91 &&
    scroll < window.innerHeight * 3.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
      nav[i].style.fontSize = "12px";
    }
    navCircle[3].classList.add("navon");
    nav[3].style.fontSize = "20px";
  } else if (
    scroll > window.innerHeight * 3.91 &&
    scroll < window.innerHeight * 4.9
  ) {
    for (let i = 0; i < navCircle.length; i++) {
      navCircle[i].classList.add("navcircle");
      navCircle[i].classList.remove("navon");
      nav[i].style.fontSize = "12px";
    }
    navCircle[4].classList.add("navon");
    nav[4].style.fontSize = "20px";
    nav.forEach((link) => {
      link.style.color = "#333";
    });
    navCircle.forEach((link) => {
      link.style.borderColor = "#333";
    });
  }
});

//nav click and scroll

nav[1].onclick = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};
