let bar = document.getElementById("bar");
let list = document.getElementById("list");

bar.addEventListener("click", () => {
  list.classList.toggle("show-list");
});

const showTab = (tabId) => {
  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.style.display = "none";
  });

  document.getElementById(tabId).style.display = "block";

  document.querySelectorAll(".tab-content").forEach((tab) => {
    tab.classList.remove("active-tab");
  });

  document.querySelectorAll(".navs a").forEach((link) => {
    link.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active-tab");

  document
    .querySelector(`.navs a[onclick="showTab('${tabId}')"]`)
    .classList.add("active");
};

let cross = document.querySelector("#cross");
let crossTwo = document.querySelector("#crossTwo");

function toggleDropdown(dropdownId) {
  console.log(dropdownId);
  let dropdown = document.getElementById(dropdownId);

  // Hide other dropdown
  if (dropdownId === "bellDropdown") {
    hideDropdown("userDropdown");
  } else if (dropdownId === "userDropdown") {
    hideDropdown("bellDropdown");
  }

  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
 
    
  cross.addEventListener("click", (event) => {
    console.log("Hey");
    if (
      !event.target.matches(".bell-btn a") &&
      !event.target.matches(".user-btn a") &&
      !event.target.matches(".bell-btn img") &&
      !event.target.matches(".user-btn img")
    ) {
      hideDropdowns();
    }
  });
  crossTwo.addEventListener("click", (event) => {
    console.log("Hey");
    if (
      !event.target.matches(".bell-btn a") &&
      !event.target.matches(".user-btn a") &&
      !event.target.matches(".bell-btn img") &&
      !event.target.matches(".user-btn img")
    ) {
      hideDropdowns();
    }
  });

  window.onclick = function (event) {
    if (
      !event.target.matches(".bell-btn a") &&
      !event.target.matches(".user-btn a") &&
      !event.target.matches(".bell-btn img") &&
      !event.target.matches(".user-btn img")
    ) {
      hideDropdowns();
    }
  };
   dropdown.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

function hideDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  }
}

function hideDropdowns() {
  hideDropdown("bellDropdown");
  hideDropdown("userDropdown");
}

