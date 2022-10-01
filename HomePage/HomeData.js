let latestNews = [
  "Two FIRs lodged over clashes between NSUI, 'ABVP members'",
  "Jaishankar, Sullivan discuss bilateral ties, Indo-Pacific",
  "Watch: Suresh Raina takes a stunner against Australia Legends in Road Safety World Series semi",
  "Borsad municipality: President loses no-confidence motion as BJP members defy party whip",
  "Covid may increase heart ailments if it becomes endemic: Expert",
  "In Gujarat, the National Games, garba and the start of election fever",
  "After the ban: The political challenge posed by PFI still needs tackling",
  "IND vs SA 1st T20: 'Surya woke up after he got hit!'",
  "Players agitated again over rough garba ground, police intervene",
  "Past promises remain on paper as PM makes new ones now: Gohil",
  "Factions move to collect documentary evidences, gather support as Sena battle shifts to EC court",
  "Diamond factory owner who warned workers against sharing posts on AAP joins BJP",
];

let topNews = [
  {
    title:"Arshdeep, Suryakumar star as India beat South Africa in 1st T20I",
    imgSrc:"https://images.indianexpress.com/2022/09/india-vs-south-africa.jpeg?resize=450%2C250&w=210"
  },
  {
    title:"CBI verifies D K Shivakumar's properties, documents at his native place",
    imgSrc:"https://images.indianexpress.com/2022/09/Shivakumar-1200-2.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Hurricane Ian: Damaging winds and rain lash Florida",
    imgSrc:"https://images.indianexpress.com/2022/09/Untitled-design-13-3.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Who is R Venkataramani, the new Attorney General for India?",
    imgSrc:"https://images.indianexpress.com/2022/09/venkatramani.png?resize=450%2C250&w=210"
  },
  {
    title:"Appealing the PFI ban: How UAPA tribunal works",
    imgSrc:"https://images.indianexpress.com/2022/09/PFI_1_1200_PTI-1-1.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Cong high command is well known, but BJP has one too",
    imgSrc:"https://images.indianexpress.com/2022/09/Untitled-design-2021-09-12T084614.361.jpg?resize=450%2C250&w=210"
  },
  {
    title:"'Even Modi cannot finish my career': Has Pankaja Munde finally gone too far?",
    imgSrc:"https://images.indianexpress.com/2022/09/Pankaja-Munde-1.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Why you should read 'Election Symbols' or 'Solid Waste' for UPSC CSE",
    imgSrc:"https://images.indianexpress.com/2022/06/UPSC-KEY-Pic-With-Logo.jpg?resize=450%2C253&w=210"
  },
  {
    title:"Can we use learnings from the past 75 years to achieve our constitutional values?",
    imgSrc:"https://images.indianexpress.com/2022/09/Opinion-2-18.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Tamil Nadu: How the M-RITE project is taking the Covid shot to marginalised people",
    imgSrc:"https://images.indianexpress.com/2022/09/Sankarapuram-1200.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Planning Parenthood: What Is The Right Time?",
    imgSrc:"https://images.indianexpress.com/2022/09/IE-Lead1-1.jpg?resize=450%2C250&w=210"
  },
  {
    title:"Young Legislators From All Across The Country To Be On One Platform In A Historic Effort At NYLC",
    imgSrc:"https://images.indianexpress.com/2022/09/IE-lead-1-1.jpg?resize=450%2C250&w=210"
  },
];

let openion = [
  {
    title:"What the Rajasthan political crisis highlights: Congress effectively has no high command",
    image:"https://images.indianexpress.com/2015/03/neeraja.jpg?w=210",
    name:"Neerja Chowdhury",
  },
  {
    title:"Can we use the learnings from the past 75 years to achieve our constitutional values by 2047?",
    image:"https://images.indianexpress.com/2014/06/urvashi.jpg?w=210",
    name:"Urvashi Butalia",
  },
  {
    title:"What is the solution to India's garbage disposal problem?",
    image:"https://images.indianexpress.com/2017/08/milind-sohoni.jpg?w=210",
    name:"Milind Sohoni",
  },
  {
    title:"Power imbalance: The governance shift in the power sector needs centre-state cooperation",
    image:"https://images.indianexpress.com/2021/08/Somit.jpg?w=210",
    name:"Somit Dasgupta",
  },
  {
    title:"Muslim intellectuals meeting Mohan Bhagwat is an act of appeasement that helps RSS agenda",
    image:"https://images.indianexpress.com/2013/12/untitled-14.jpg?w=210",
    name:"Abdul Khaliq",
  },
  {
    title:"Russia's nuclear threat may force Europe to build a nuclear arsenal",
    image:"https://images.indianexpress.com/2013/12/c-raja-mohan21.jpg?w=210",
    name:"C. Raja Mohan",
  },
];

let lifestyle = [
  {
    title:"Can a patient administer CPR on themselves in case of a heart attack, cardiac arrest?",
    imgSrc:"https://images.indianexpress.com/2022/09/GettyImages-chest-compressions-CPR-1200.jpg?w=210"
  },
  {
    title:"Check out how Hina Khan keeps it glamorous in Maldives: 'Travel therapy'",
    imgSrc:"https://images.indianexpress.com/2022/09/Hina-Khan-1200.jpg?w=210",
  },
  {
    title:"Nutritionist shares Navratri meal plan that will lessen mood swings, aid digestion",
    imgSrc:"https://images.indianexpress.com/2022/09/food-1.jpg?w=210"
  },
  {
    title:"'We're a country with large variations in skin tones, body sizes but most brands still aren't inclusive': Anju Modi",
    imgSrc:"https://images.indianexpress.com/2022/09/AnjuModi1200_PRhandout.jpg?w=210",
  },
  {
    title:"Understanding the link between water consumption and cognitive abilities",
    imgSrc:"https://images.indianexpress.com/2022/09/drinking-87155_960_720.jpg?w=210",
  },
]

let entertainment = [
  {
    title:"Trade decodes the Ranbir Kapoor's box office journey; the good, the bad, the blockbuster",
    imgSrc:"https://images.indianexpress.com/2022/09/Collage-Maker-27-Sep-2022-07.13-PM.jpg?w=210",
  },
  {
    title:"Ranbir Kapoor gets love from mom Neetu Kapoor on birthday",
    imgSrc:"https://images.indianexpress.com/2022/09/ranbiralia1200.jpeg?w=210",
  },
  {
    title:"Salman Khan reveals mother Salma has stopped watching Bigg Boss",
    imgSrc:"https://images.indianexpress.com/2022/09/salman-khan-bigg-boss-season-16.jpg?w=210",
  },
  {
    title:"Navya Nanda reveals nana Amitabh Bachchan's reaction to her podcast",
    imgSrc:"https://images.indianexpress.com/2022/09/naveli-nanda.jpg?w=210",
  },
  {
    title:"Mani Ratnam says SRK refused to use safety harness in Chaiyya Chaiyya",
    imgSrc:"https://images.indianexpress.com/2022/09/srk1200-1.jpg?w=210",
  },
  {
    title:"Asha Parekh says her male co-stars were 'frightened' of her",
    imgSrc:"https://images.indianexpress.com/2021/12/asha-parekh-.jpg?w=210",
  },
];

let world = [
  {
    title:"PM Modi's remarks to Putin not a change in India's position on Ukraine war, says Jaishankar",
    imgSrc:"https://images.indianexpress.com/2022/09/jaishankar-5.jpg?w=210",
  },
  {
    title:"N Korea test launches missile on eve of Harris trip to Seoul",
    imgSrc:"https://images.indianexpress.com/2022/06/kim-jong-un-north-korea-nuclear-test.jpg?w=210",
  },
  {
    title:"White House gains partners to end US hunger within a decade",
    imgSrc:"https://images.indianexpress.com/2022/09/Biden_Hunger_32017-465b4.jpg?w=210",
  },
  {
    title:"US Feds want psychological tests for parents of separated kids",
    imgSrc:"https://images.indianexpress.com/2022/09/Immigration_Separating_Families_39253-e8faa.jpg?w=210"
  },
  {
    title:"Strained fiscal math limits foodgrain scheme extension to only 3 months",
    imgSrc:"https://images.indianexpress.com/2022/09/rice-3.jpg?resize=450%2C250&w=210&quality=70",
  },
];

let part1Data = [
  "Twitter accounts of PFI, its leaders taken down day after ban",
  "Emergency response phase since Galwan incident over: China envoy",
  "Cong race opens up: Digvijaya Singh in running, Ashok Gehlot heads to Delhi",
  "In Gujarat, the National Games, garba and the start of election fever",
  "Opinion | G-20 presidency is an opportunity to position India as the voice of the Global South",
];

let part3Data = [
  "Why Ajay Maken, gen secy in-charge of Rajasthan Congress is a factor in current mess",
  "Chavan claims Shinde met him with alliance proposal during Fadnavis rule",
  "Six airbags mandatory in passenger cars from Oct 1, 2023, says Gadkari",
  "Jasprit Bumrah likely to be ruled out of T20 World Cup",
  "G-20 presidency an opportunity to position India as voice of Global South",
];

let cityImg = {
  delhi:"https://images.indianexpress.com/2022/09/delhi-hc-2.jpg?w=303",
  mumbai:"https://images.indianexpress.com/2022/09/mumbai-pune-expressway.jpg?w=303",
  pune:"https://images.indianexpress.com/2022/09/India-coronavirus-vaccine.jpg?w=303",
  ahmedabad:"https://images.indianexpress.com/2022/09/Modi-3-1.jpg?w=303",
  hydrabad:"https://images.indianexpress.com/2022/09/Elizabeth-1-3.jpg?w=303",
};

let cityImgTitle = {
  delhi:"Delhi HC Bar election results out, president has 'long-term' vision for association",
  mumbai:"Mumbai-Pune Expressway Missing Link project: Maharashtra to get India's highest cable-stayed road bridge",
  pune:"Special Covid vaccination drive saw merely 10% of total beneficiaries getting jabbed in Maharashtra: Data",
  ahmedabad:"Surat will emerge as safest, convenient diamond trading hub after DREAM project is completed: PM Modi",
  hydrabad:"'Won't say how much I've spent': Man setting up library of stamps, notes featuring Queen Elizabeth",
  };

  let delhi = [
    "Harpic vs Domex ad case: Advertiser cannot disparage, defame goods of competitor, says Delhi HC",
    "Delhi's IGI Airport becomes India's first '5G-ready' airport",
    "Quack arrested for death of Maruti Suzuki intern in Gurugram",
    "Delhi Police conduct mock drill of emergency response plan in Northeast district",
  ];
  let mumbai = [
    "Mumbai: Woman from Addis Ababa held for 'smuggling cocaine'",
    "Will publish Ambedkar's MSc thesis, provide more facilities to panel: Maharashtra govt to HC",
    "Traffickers using 'black cocaine' to avoid being caught by sniffer dogs: NCB",
    "Controlling institutions, BJP uses Shinde camp against Maharashtra, says Saamana",
  ];
  let pune = [
    "Pune Infra Watch: PMC proposes to provide 24X7 water supply system in Sus and Mahalunge",
    "Pune: Anti-encroachment drive in Balewadi High Street, sheds of hotels, restaurants pulled down",
    "Pune: Seven-year-old girl goes missing, father held for murder",
    "Pune: One dead, three injured as cement mixer truck crashes into autorickshaws",
  ];
  let ahmedabad = [
    "Two FIRs lodged over clashes between NSUI, 'ABVP members'",
    "2002 Gujarat riots: Ex-DGP RB Sreekumar granted interim bail till November 15",
    "PM Modi to launch Ahmedabad Metro Phase 1, flag off Vande Bharat Express during two-day Gujarat visit",
    "Hindutva is a way of life, why is it related to extremism, asks actor Aashiesh Sharma",
  ];
  let hydrabad = [
    "After tweet on Rs 7,000 traffic fine goes viral, Telangana police say 'officer concerned' cleared all dues",
    "BJP's Telangana unit welcomes Centre's decision to impose ban on PFI and its affiliates, lauds PM Modi",
    "Andhra Pradesh: CM YS Jagan Mohan Reddy launches 'Visit AP' campaign",
    "Hyderabad: Burqa-clad sisters booked for breach of peace, taken into custody",
  ];