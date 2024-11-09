const showPass = document.querySelector(".show-password");
const showPassBtn = showPass.querySelector("i");
const passInput = document.querySelector("#password");

const showPassConfirm = document.querySelector(".confirm-show-password");
const showPassConfirmBtn = showPassConfirm.querySelector("i");
const passConfirmInput = document.querySelector("#confirm-password");

showPassBtn.addEventListener("click", () => {
  passInput.type = passInput.type === "password" ? "text" : "password";

  showPassBtn.classList = showPassBtn.classList.contains("ri-eye-fill")
    ? "ri-eye-off-fill"
    : "ri-eye-fill";
});

showPassConfirmBtn.addEventListener("click", () => {
  passConfirmInput.type =
    passConfirmInput.type === "password" ? "text" : "password";

  showPassConfirmBtn.classList = showPassConfirmBtn.classList.contains(
    "ri-eye-fill"
  )
    ? "ri-eye-off-fill"
    : "ri-eye-fill";
});
