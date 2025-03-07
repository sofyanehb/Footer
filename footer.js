const stars = document.querySelectorAll(".stars input");
const submit = document.querySelector("button");
const text = document.querySelector("textarea");

stars.forEach((star) => {
  star.addEventListener("change", function () {
    const rating = this.value;

    stars.forEach((star) => {
      const label = document.querySelector(`label[for="${star.id}"]`);
      label.style.color = star.value <= rating ? "gold" : "gray";
    });
  });
});

function clearTextrea() {
  document.getElementById("description").value = "";
}

submit.addEventListener("click", () => {
  alert(text.value);
});
