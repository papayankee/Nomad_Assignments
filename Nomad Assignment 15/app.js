const bgColor = document.querySelector("body");

const superEventHandler = {
  windowResize: function () {
    if (window.innerWidth < 300) {
      bgColor.style.backgroundColor = "red";
    } else if (window.innerWidth < 600) {
      bgColor.style.backgroundColor = "blue";
    } else if (window.innerWidth < 1200) {
      bgColor.style.backgroundColor = "purple";
    } else if (window.innerWidth < 1800) {
      bgColor.style.backgroundColor = "orange";
    }
  }
};

window.addEventListener("resize", superEventHandler.windowResize);
