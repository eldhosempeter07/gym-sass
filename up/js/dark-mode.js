let checkbox = document.querySelector('input[name="theme"]');
let htmlElement = document.documentElement;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    htmlElement.setAttribute("data-theme", "dark");
    smoothTrans();
  } else {
    htmlElement.setAttribute("data-theme", "light");
    smoothTrans();
  }
});

let smoothTrans = () => {
  htmlElement.classList.add("transition");

  window.setTimeout(() => {
    htmlElement.classList.remove("transition");
  }, 1000);
};
