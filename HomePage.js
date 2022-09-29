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


let citySelector = document.querySelector("#citySelect");
citySelector.addEventListener("change",cityNewsFun);

function cityNewsFun(){
  let cityVal = citySelector.value;
  document.querySelector("#cityDataFetch").innerHTML=null;
  let imgTag = document.createElement("img");
  let h3Tag = document.createElement("h3");
  let h3Tag2 = document.querySelector("#cityNews>h3");

  if(cityVal=="delhi"){
    imgTag.src = cityImg.delhi;
    h3Tag.innerText = cityImgTitle.delhi;
    h3Tag2.innerText = "DELHI NEWS"
  }else if(cityVal=="mumbai"){
    imgTag.src = cityImg.mumbai;
    h3Tag.innerText = cityImgTitle.mumbai;
    h3Tag2.innerText = "MUMBAI NEWS"
  }else if(cityVal=="pune"){
    imgTag.src = cityImg.pune;
    h3Tag.innerText = cityImgTitle.pune;
    h3Tag2.innerText = "PUNE NEWS"
  }else if(cityVal=="ahmedabad"){
    imgTag.src = cityImg.ahmedabad;
    h3Tag.innerText = cityImgTitle.ahmedabad;
    h3Tag2.innerText = "AHMEDABAD NEWS"
  }else if(cityVal=="hydrabad"){
    imgTag.src = cityImg.hydrabad;
    h3Tag.innerText = cityImgTitle.hydrabad;
    h3Tag2.innerText = "HYDRABAD NEWS"
  }
  let divTag = document.createElement("div");
  divTag.append(h3Tag);
  document.querySelector("#cityDataFetch").append(imgTag,divTag);
  if(cityVal=="delhi"){
    document.querySelector("#part4Data").innerHTML=null
    delhi.forEach((elem) => {
      let pTag = document.createElement("p");
      pTag.innerText=elem;
      document.querySelector("#part4Data").append(pTag);
    });
  }else if(cityVal=="mumbai"){
    document.querySelector("#part4Data").innerHTML=null
    mumbai.forEach((elem) => {
      let pTag = document.createElement("p");
      pTag.innerText=elem;
      document.querySelector("#part4Data").append(pTag);
    });
  }else if(cityVal=="pune"){
    document.querySelector("#part4Data").innerHTML=null
    pune.forEach((elem) => {
      let pTag = document.createElement("p");
      pTag.innerText=elem;
      document.querySelector("#part4Data").append(pTag);
    });
  }else if(cityVal=="ahmedabad"){
    document.querySelector("#part4Data").innerHTML=null
    ahmedabad.forEach((elem) => {
      let pTag = document.createElement("p");
      pTag.innerText=elem;
      document.querySelector("#part4Data").append(pTag);
    });
  }else if(cityVal=="hydrabad"){
    document.querySelector("#part4Data").innerHTML=null
    hydrabad.forEach((elem) => {
      let pTag = document.createElement("p");
      pTag.innerText=elem;
      document.querySelector("#part4Data").append(pTag);
    });
  }
}