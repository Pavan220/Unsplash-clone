const photo = document.getElementsByClassName("photo");
for (const data of photo) {
  data.children[0].addEventListener("click", function () {
    console.log(data);
    data.classList.toggle("photo-active");
    if (data.classList.value.includes("photo-active")) {
      data.children[0].insertAdjacentHTML(
        "beforebegin",
        `<button class="btn bt-1">❤</button>
      <button class="btn bt-2">+</button>
      <button class="btn bt-3">↓</button>`
      );
    } else {
      for (let i = 0; i <= 4; i++) {
        data.removeChild(data.childNodes[1]);
      }
    }
  });
}
