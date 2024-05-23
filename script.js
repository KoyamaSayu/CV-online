"use strict";

// Xác thực email
function validateEmail(email) {
  return regex.test(email);
}

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById("submit").addEventListener("click", function () {
  const strEmail = document.querySelector("#email").value;

  if (strEmail === "") {
    window.alert(`⚠ Hãy nhập email để xem nội dung.`);
  } else if (!validateEmail(strEmail)) {
    window.alert(`⚠ Email không hợp lệ.`);
  } else {
    document.querySelector(".form").classList.toggle("hide");
    document.querySelector("#info-detail").classList.toggle("hide");
  }
});

// Ẩn hiện nội dung
const btnsOpen = document.querySelectorAll(".btn-view");

const ViewMore = function (btn, i) {
  const divView = document.querySelector(`.view${i}`);
  divView.classList.remove("hide");
  btn.textContent = "▲ View Less";
};
const ViewLess = function (btn, i) {
  const divHide = document.querySelector(`.view${i}`);
  divHide.classList.add("hide");
  btn.textContent = "▼ View More";
};

for (let i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener("click", function () {
    if (btnsOpen[i].textContent === "▼ View More") {
      ViewMore(btnsOpen[i], i + 1);
    } else {
      ViewLess(btnsOpen[i], i + 1);
    }
  });
}
