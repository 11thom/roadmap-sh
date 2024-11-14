const tabLinks = document.querySelectorAll(".tab-links");
const tabContent = document.querySelectorAll(".tab-content");

tabLinks.forEach(function (el) {
  el.addEventListener("click", openTabs);
});

function openTabs(el) {
  const btnTarget = el.currentTarget;
  const tabNum = btnTarget.dataset.tab;

  tabContent.forEach(function (el) {
    el.classList.remove("active");
  });

  tabLinks.forEach(function (el) {
    el.classList.remove("active");
  });

  document.querySelector("#" + tabNum).classList.add("active");

  btnTarget.classList.add("active");
}
