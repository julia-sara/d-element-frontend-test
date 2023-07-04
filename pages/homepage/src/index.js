(function () {
  const Button = document.querySelector(".burger-button");
  const BurgContainer = document.querySelector(".burger-container");
  Button.addEventListener("click", () => {
    // B.classList.toggle('burger_activ');
    BurgContainer.classList.toggle("burger-container_active");
  });
})();
