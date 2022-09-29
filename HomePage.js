part1Data.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#part1Data").append(pTag);
});

latestNews.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#latestData").append(pTag);
});

topNews.forEach((elem) => {
  let division = document.createElement("div");
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  let imgTag = document.createElement("img");
  imgTag.src = elem.imgSrc;
  division.append(pTag,imgTag);
  document.querySelector("#topNews").append(division);
});

openion.forEach((elem) => {
  let mainDiv = document.createElement("div");
  let subDiv = document.createElement("div");
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  let h5Tag = document.createElement("h5");
  h5Tag.innerText = elem.name;
  let imgTag = document.createElement("img");
  imgTag.src = elem.image;
  subDiv.append(pTag,h5Tag);
  mainDiv.append(subDiv,imgTag);
  document.querySelector("#opinion").append(mainDiv);
});

part3Data.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#part3Data").append(pTag);
});

lifestyle.forEach((elem) => {
  let division = document.createElement("div");
  let pTag = document.createElement("p");
  pTag.innerText = elem.title;
  let imgTag = document.createElement("img");
  imgTag.src = elem.imgSrc;
  division.append(pTag,imgTag);
  document.querySelector("#lifeStyle").append(division);
});

