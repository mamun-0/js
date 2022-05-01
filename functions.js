const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnClickValue = parseInt(btn.dataset.clicks);
    btn.dataset.clicks = btnClickValue + 1;

    btn.innerText = btn.dataset.clicks;

  });
});
