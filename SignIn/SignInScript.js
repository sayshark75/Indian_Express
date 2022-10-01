let topButtons = [
  {
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png",
    title:"Continue With Google",
  },
  {
    imgSrc:"https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png",
    title:"Continue With Facebook",
  },
  {
    imgSrc:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/apple-icon.png",
    title:"Continue With Google",
  },
];

topButtons.forEach((elem) => {
  let divTag = document.createElement("div");
  let imgTag = document.createElement("img");
  imgTag.src = elem.imgSrc;
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  divTag.append(imgTag,pTag);
  document.querySelector("#topView").append(divTag);
});

let signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];
console.log('signUpData: ', signUpData);

let myForm = document.querySelector("form");
myForm.addEventListener("submit",(e) => {
  e.preventDefault();
  if(signUpData.email === myForm.email.value && signUpData.password === myForm.pass.value ){
    alert("Logged In Successfully!");
    localStorage.setItem("loginFlag",true);
    window.location.href = "/HomePage.html";
  }else{
    alert("Invalid Credentials");
  }
});
