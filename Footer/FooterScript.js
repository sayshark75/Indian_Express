let topCat1 = [
  "Explained News",
  "Delhi News",
  "Health News",
  "Jobs",
  "Mobile & Tabs",
];
let topCat2 = [
  "Political Pulse",
  "Pune News",
  "India News",
  "Mobile & Tabs",
  "Food & Wine",
];
let topCat3 = [
  "Latest opinion",
  "Banglore News",
  "Sports News",
  "Tech Reviews",
  "Travel",
];
let topCat4 = [
  "Mumbai News",
  "Bollywood News",
  "Lifestyle News",
  "Gadgets",
  "Fitness",
];
let trending1 = [
  "Apple September Event Live Updates",
  "Fitness Classes for Kids",
  "IPL 2022 News",
  "Ind Vs Aus:",
];
let trending2 = [
  "Horoscope",
  "Dance Classes for Kids",
  "Buy All-Access Pass",
  "Delhi News Live Updates:",
];
let trending3 = [
  "India News",
  "Entertainment News",
  "Subscribe To The Indian Express",
  "Delhi: Yamuna Flowing Above 'Warning' Level",
];
let trending4 = [
  "Art & Craft Classes For Kids",
  "UPSC News",
  "Buy Digital Premium",
  "Ponniyin Selvan Promotions:",
];
let latest1 = [
  "Ordered Laptop On Flipkart During Big Billion Days Sale, Got Detergent Bars Instead!",
  "On 50th Anniversary Of Normalisation Of Ties, What Issues Strain China-Japan Relations?",
];
let latest2 = [
  "Priyanka Chopra Calls Citadel Innovative, Interesting Experiment, Anthony Russo Says Casting Her Was Intelligent Decision",
  "Pakistan Swears In Ishaq Dar As Finance Minister",
];
let latest3 = [
  "Blonde Movie Review: Ana De Armas Is Otherworldly In Netflix's Divisive And Divine Marilyn Monroe Anti-Biopic",
  "Chandigarh Property Grab Case: Punjab And Haryana HC Grants Bail To Inspector Rajdeep Singh",
];
let latest4 = [
  "We're A Country With Large Variations In Skin Tones, Body Sizes But Most Brands Still Aren't Inclusive': Anju Modi",
  "Mumbai: Free Wi-Fi, Mobile Charging Facility At BEST Bus Stops Soon",
];
let express1 = [
  "The Indian Express",
  "The Financial Express",
  "Loksatta",
  "Jansatta",
  "The ExpressGroup",
  "Newsletters",
  "Ramnath Goenka Excellence in Journalism Awards",
  "Light House Journalism",
];
let express2 = [
  "ieTamil.com",
  "ieBangla.com",
  "ieMalayalam.com",
  "inUth",
  "MyInsuranceClub",
  "26/11 Stories of Strength",
  "Online Classes for Kids",
  "Compare Term Insurance",
];
let quicklist = [
  "T&C",
  "Advertise with Us",
  "Contact Us",
  "Statutory provisions on reporting (sexual offenses)",
  "CSR",
  "Privacy Policy",
  "Brand Solutions",
  "Subscribe",
  "This website follows the DNPA's code of conduct",
];
let followImg = [
  "https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-facebook.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-twitter.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-linkedin.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-instagram.svg",
];
let dloadImg = [
  "https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-android.svg",
  "https://indianexpress.com/wp-content/themes/indianexpress/images/icons/icon-apple.svg",
];


//Data Fetch in HTML

topCat1.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  if(elem == "Explained News"){
    list.addEventListener("click",(e) => {
      window.location.href = "/ExplainedPage.html";
    });
  }
  document.querySelector("#tc1").append(list);
});
topCat2.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#tc2").append(list);
});
topCat3.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#tc3").append(list);
});
topCat4.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#tc4").append(list);
});

trending1.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#trend1").append(list);
});
trending2.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#trend2").append(list);
});
trending3.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#trend3").append(list);
});
trending4.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#trend4").append(list);
});

latest1.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#latest1").append(list);
});
latest2.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#latest2").append(list);
});
latest3.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#latest3").append(list);
});
latest4.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#latest4").append(list);
});

followImg.forEach((elem,i) => {
  let newImg = document.createElement("img");
  newImg.src = elem;
  newImg.style.cursor="pointer"
  newImg.addEventListener("click",(e) => {
    if(i==0){
      window.open("https://www.facebook.com/indianexpress");
    }else if(i==1){
      window.open("https://twitter.com/indianexpress");
    }else if(i==2){
      window.open("https://www.linkedin.com/company/indian-express/","_blank");
    }else if(i==3){
      window.open("https://www.instagram.com/indianexpress/","_blank");
    }
  });
  document.querySelector("#followImg").append(newImg);
});

dloadImg.forEach((elem,i) => {
  let newImg = document.createElement("img");
  newImg.src = elem;
  newImg.style.cursor="pointer"
  newImg.addEventListener("click",(e) => {
    if(i==0){
      window.open("https://play.google.com/store/apps/details?id=com.indianexpress.android&hl=en","_blank");
    }else if(i==1){
      window.open("https://itunes.apple.com/us/app/the-indian-express/id506351833?mt=8","_blank");
    }
  });
  document.querySelector("#dloadImg").append(newImg);
});

express1.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#expressList1").append(list);
});

express2.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#expressList2").append(list);
});

quicklist.forEach((elem) => {
  let list = document.createElement("li");
  list.innerText = elem;
  list.style.cursor="pointer"
  document.querySelector("#quickList").append(list);
});