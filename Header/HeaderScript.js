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

