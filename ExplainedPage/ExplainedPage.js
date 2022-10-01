headBarData.forEach((elem) => {
  let divTag = document.createElement("div");
  let h3Tag = document.createElement("h3");
  h3Tag.innerText = elem;
  divTag.append(h3Tag);
  document.querySelector("#headBar").append(divTag);
});

gridData.forEach((elem) => {
  let divTag = document.createElement("div");
  let imgTag = document.createElement("img");
  imgTag.src = elem.imgSrc;
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  divTag.append(imgTag,pTag);
  document.querySelector("#cardGrid1").append(divTag);
});

dualCards.forEach((elem) => {
  let divTag = document.createElement("div");
  let imgTag = document.createElement("img");
  imgTag.src = elem.imgSrc;
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  divTag.append(imgTag,pTag);
  document.querySelector("#cardGrid2").append(divTag);
});

// Go To Home Page
document.querySelector("#goHomePage").addEventListener("click",(e) => {
  window.location.href = "/HomePage.html";
});