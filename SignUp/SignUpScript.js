let topButtons = [
  {
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
    title: "Continue With Google",
  },
  {
    imgSrc:
      "https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png",
    title: "Continue With Facebook",
  },
  {
    imgSrc:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apple-icon.png",
    title: "Continue With Google",
  },
];

topButtons.forEach((elem) => {
  let divTag = document.createElement("div");
  let imgTag = document.createElement("img");
  imgTag.src = elem.imgSrc;
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  divTag.append(imgTag, pTag);
  document.querySelector("#topView").append(divTag);
});

let myForm = document.querySelector("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let myPass = myForm.pass.value;
  if (myPass !== myForm.cpass.value) {
    alert("Password Does Not Match");
  } else if (myPass.length === 8) {
    let formData = {
      email: myForm.email.value,
      password: myForm.pass.value,
    };
    localStorage.setItem("signUpData", JSON.stringify(formData));
    alert("Signed Up!, Please Login Again");
    window.location.href = "/SignIn.html";
  } else {
    alert("Password Must Be Minimum 8 Characters Long");
  }
});
