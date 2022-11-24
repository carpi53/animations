const cursor = document.querySelector(".custom-cursor");
const titleContent = document.querySelector(".hero-content h1");
const subtitle = document.querySelector(".subtitle");
const heroPage = document.querySelector(".hero");
const buttonScroll = document.querySelector(".hero-push-link");

typeMachine(titleContent);
displayHeroElement();

function typeMachine(text) {
  setTimeout(function () {
    textToWrite = text.getAttribute("aria-label");
    let textInside = titleContent.textContent;
    if (textInside.length <= textToWrite.length) {
      const span = document.createElement("span");
      span.textContent = textToWrite[textInside.length];
      titleContent.appendChild(span);
      typeMachine(titleContent);
    }
  }, 300);
}

window.addEventListener("mousemove", handleCursor);

function handleCursor(e) {
  cursor.style.top = `${e.pageY - 15}px`;
  cursor.style.left = `${e.pageX - 15}px`;
}

buttonScroll.addEventListener("click", scrollDown);

function scrollDown(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector(`${e.target.getAttribute("href")}`).offsetTop,
    behavior: "smooth",
  });
}

function displayHeroElement() {
  setTimeout(function () {
    subtitle.classList.add("active");
    buttonScroll.classList.add("active");
  }, 1000);
}

const generalAnimatedElements = [
    ...document.querySelectorAll("h2"),
    ...document.querySelectorAll(".section-subtitle"),
  ];
  const discoverSectionElements = [
    document.querySelector(".text-discover-content h3"),
    document.querySelector(".text-discover-content p"),
    document.querySelector(".discover-link"),
    document.querySelector(".img-main-discover"),
  ];
  console.log(discoverSectionElements);
  const slideInContent = [
    ...document.querySelectorAll(".side-apparition-container"),
  ];
  const animatedContents = [
    ...generalAnimatedElements,
    ...discoverSectionElements,
    ...slideInContent
  ]

const intersectionObserver = new IntersectionObserver(handleIntersect, {rootMargin: "-10%"})

animatedContents.forEach(el => intersectionObserver.observe(el))

function handleIntersect(entries) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
      intersectionObserver.unobserve(entry.target)
    }
  })
}

/* const scrollOffset = heroPage.offsetHeight;

const scrollElements = document.querySelectorAll(".scroll");

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= (scrollOffset - 200)
  );
};

const displayScrollElement = () => {
  scrollElements.forEach((element) => {
    element.classList.add("scrolled");
  });
};

const removeScrollElement = () => {
    scrollElements.forEach((element) => {
      element.classList.remove("scrolled");
    });
  };

const handleScrollAnimation = () => {
  scrollElements.forEach((element) => {
    if (elementInView(element, scrollOffset)) {
      displayScrollElement();
    } else {
      removeScrollElement();
    }
  });
}; */
