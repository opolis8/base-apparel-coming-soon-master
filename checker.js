function validEmail() {
  const email = document.getElementById("email-input");
  const filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    document.querySelector(".error-status").style.display = "block";
    document.querySelector(".errorme").style.display = "block";
  } else {
    document.querySelector(".error-status").style.display = "none";
    document.querySelector(".errorme").style.display = "none";
  }
}

const arrow = document.querySelector(".icon-arrow");
const emailinput = document.getElementById("email-input");

emailinput.addEventListener("keyup", validEmail);

arrow.addEventListener("click", validEmail);
