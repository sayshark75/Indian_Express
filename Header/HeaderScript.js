// Dynamic Date
let date = new Date();
let week = date.getDay();
let month = date.getMonth();

let weekObj = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let monthObj = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function createDate(week, month) {
  let ww = weekObj[week];
  let mm = monthObj[month];
  let dd = date.getDate();
  let yyyy = date.getFullYear();
  return "" + ww + ", " + mm + " " + dd + ", " + yyyy;
}

document.querySelector("#dateJS").innerHTML=createDate(week, month);

let signInFlag = JSON.parse(localStorage.getItem("loginFlag")) || false;

if(signInFlag){
  document.querySelector("#signInBtn").innerHTML="My Account"
}else{
  document.querySelector("#signInBtn").innerHTML="Sign In"
}

let languageData = [
  {
    link: "",
    title: "ENGLISH",
  },
  {
    link: "https://tamil.indianexpress.com/",
    title: "தமிழ்",
  },
  {
    link: "https://bengali.indianexpress.com/",
    title: "বাংলা",
  },
  {
    link: "https://malayalam.indianexpress.com/",
    title: "മലയാളം",
  },
  {
    link: "https://www.jansatta.com/",
    title: "हिंदी",
  },
  {
    link: "https://www.loksatta.com/",
    title: "मराठी",
  },
];

let linkDiv = [
  {
    link: "/index.html",
    title: "Home",
  },
  {
    link: "/ExplainedPage.html",
    title: "Explained",
  },
  {
    link: "https://indianexpress.com/section/political-pulse/",
    title: "Political Pulse",
  },
  {
    link: "https://indianexpress.com/section/india/",
    title: "India",
  },
  {
    link: "https://indianexpress.com/section/cities/",
    title: "Cities",
  },
  {
    link: "https://indianexpress.com/section/opinion/",
    title: "Openion",
  },
  {
    link: "https://indianexpress.com/section/entertainment/",
    title: "Entertainment",
  },
  {
    link: "https://indianexpress.com/section/lifestyle/",
    title: "Lifestyle",
  },
  {
    link: "https://indianexpress.com/section/technology/",
    title: "Technology",
  },
  {
    link: "https://indianexpress.com/videos/",
    title: "Videos",
  },
  {
    link: "https://indianexpress.com/section/sports/",
    title: "Sports",
  },
  {
    link: "https://indianexpress.com/audio/",
    title: "Audio",
  },
  {
    link: "https://indianexpress.com/section/education/",
    title: "Education",
  },
  {
    link: "https://indianexpress.com/about/express-premium/",
    title: "Premium",
  },
  {
    link: "https://indianexpress.com/section/express-exclusive/",
    title: "Investigations",
  },
];

let buttonSection = [
  "Crossword & Sudoku",
  "UPSC Special",
  "Everyday Explainers",
  "Health Specials",
  "Academic Councelling",
  "Follow Authors",
  "Cricket",
];

let newsLetterImg = [
  "https://indianexpress.com/wp-content/themes/indianexpress/images/facebook-icon.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/twitter-icon.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/youtube-icon.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/IE-insta-grey.svg",
];

newsLetterImg.forEach((elem,i) => {
  let imgTag = document.createElement("img");
  imgTag.src = elem;
  imgTag.addEventListener("click",(e) => {
    if(i==0){
      window.open("https://www.facebook.com/indianexpress");
    }else if(i==1){
      window.open("https://twitter.com/indianexpress");
    }else if(i==2){
      window.open("https://www.youtube.com/channel/UCJEDFSxHHOW1PpBccdSxOTA","_blank");
    }else if(i==3){
      window.open("https://www.instagram.com/indianexpress/","_blank");
    }
  });
  document.querySelector("#newsLetterDiv").append(imgTag);
});

function goHome(){
  window.location.href = "/index.html"
}

function subscribeBtn(){
  window.open("https://indianexpress.com/subscribe/","_blank");
}
let isLoginData = JSON.parse(localStorage.getItem("loginFlag"))
function signInBtn(){
  if(signInFlag){
    window.location.href = "/LogOut.html"
  }else if(isLoginData!==null){
    window.location.href = "/SignIn.html"
  }else{
    window.location.href = "/SignUp.html"
  }
}


languageData.forEach((elem, i) => {
  let aTag = document.createElement("a");
  aTag.href = elem.link;
  aTag.innerHTML = elem.title;
  let pTag = document.querySelector("#linksBar");
  if (i == 0) {
    pTag.append(aTag);
  } else {
    pTag.append(" | ");
    pTag.append(aTag);
  }
});

linkDiv.forEach((elem) => {
  let aTag = document.createElement("a");
  aTag.href = elem.link;
  aTag.innerHTML = elem.title;
  document.querySelector("#linkDiv").append(aTag);
});

buttonSection.forEach((elem) => {
  let btnTag = document.createElement("button");
  btnTag.innerHTML = elem;
  document.querySelector("#buttonSection").append(btnTag);
});

buttonSection.forEach((elem) => {
  let btnTag = document.createElement("button");
  btnTag.innerHTML = elem;
  document.querySelector(".buttonSection").append(btnTag);
});

let boxData1 = ["e-paper","Premium","India","Cities"];
let boxData2 = ["Opinion","Political Pulse","Explained","Science"];
let boxData3 = ["Sports","World","Business","Entertainment"];
let boxData4 = ["Health","Lifestyle","Technology","Education"];
let boxData5 = ["Eye","Trending","Investigations","Newsletters"];
let boxData6 = ["Photos","Videos","Audio","Web Stories"];


boxData1.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#box1").append(pTag);
});

boxData2.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#box2").append(pTag);
});

boxData3.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#box3").append(pTag);
});

boxData4.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#box4").append(pTag);
});

boxData5.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#box5").append(pTag);
});

boxData6.forEach((elem) => {
  let pTag = document.createElement("p");
  pTag.innerText = elem;
  document.querySelector("#box6").append(pTag);
});
