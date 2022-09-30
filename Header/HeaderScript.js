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
  window.location.href = "/HomePage.html"
}

function subscribeBtn(){
  window.open("https://indianexpress.com/subscribe/","_blank");
}