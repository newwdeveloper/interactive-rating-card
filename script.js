const btn = document.querySelector(".btn");
const rating = document.querySelector(".rating");
const userRating = document.querySelector("#selectedRat");
const container = document.querySelector(".container");
const result = document.querySelector(".result");

let previousSelected = null;
rating.addEventListener("click", function (event) {
  if (
    event.target.tagName === "P" &&
    event.target.classList.contains("rating")
  ) {
    if (previousSelected) {
      previousSelected.style.backgroundColor = ""; // Reset color
    }
    event.target.style.backgroundColor = "red";
    previousSelected = event.target;
    btn.disabled = false;
  }
});
btn.addEventListener("click", function () {
  // Hide the container and show the result
  btn.style.backgroundColor = "green";
  container.style.display = "none";
  result.style.display = "block";

  const ratings = Array.from(rating.children);
  const index = ratings.indexOf(previousSelected);
  userRating.innerText = index + 1;

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("closeBtn");
  closeBtn.innerText = "X";
  result.appendChild(closeBtn);
  closeBtn.addEventListener("click", function () {
    container.style.display = "block";
    result.style.display = "none";
    btn.style.backgroundColor = "";
    if (previousSelected) {
      previousSelected.style.backgroundColor = ""; // Reset color
      btn.disabled = true;
    }
    previousSelected = null;
  });
});
