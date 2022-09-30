let headBarData = [
  "IDEAS",
  "ECONOMICS",
  "HEALTH",
  "POLITICS",
  "CULTURE",
  "EVERYDAY EXPLAINERS",
  "GLOBAL",
  "SPORTS",
  "SCI-TECH",
  "CLIMATE",
];

let gridData = [
  {
    imgSrc:"https://images.indianexpress.com/2022/09/2022-09-29T103135Z_1402444629_RC2OPW96AZG7_RTRMADP_2_UKRAINE-CRISIS-RUSSIA-REFERENDUMS.jpg?w=316",
    title:"Putin to host event to incorporate Ukrainian regions into Russia: What",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/cng-terminal.jpg?w=316",
    title:"Behind the ‘world’s first CNG terminal’ at Bhavnagar, Gujarat",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Nuclear-threat.jpg?w=316",
    title:"With Putin’s nuclear threat, what are Russia’s ‘strategic’ and ‘tactical’ nuclear",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Chup-film-1200.jpeg?w=316",
    title:"How film criticism differs from ‘reviewing’ a movie, and how relevant it is today",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/mahakal-temple-1200.jpg?w=316",
    title:"What is the Rs 600-crore redevelopment plan for Ujjain’s Mahakaleshwar",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/PFI_1_1200_PTI-1-1.jpg?w=316",
    title:"Appealing the PFI ban: How UAPA tribunal works",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/JM28ChandigarhAirport14-1.jpg?w=316",
    title:"Chandigarh airport renamed after Bhagat Singh: End of a long",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/NEET.jpg?w=316",
    title:"SC reserves verdict on EWS quota: What the govt, petitioners have argued",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/roger.jpg?w=316",
    title:"Why Pink Floyd co-founder Roger Waters’ stance on Ukraine led to his concerts",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Punjab-1.jpg?w=316",
    title:"Can bedding for cattle solve the paddy stubble problem in Punjab?"
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/wheat-production-express-archive-1200.jpeg?w=316",
    title:"Three more months of free foodgrains for poor: economics & politics of",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/uk-flag-7591.jpg?w=316",
    title:"The mess in the UK economy, and why the govt is being blamed for it",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/oracle-case-copy.jpg?w=316",
    title:"Why Oracle has been fined $23 million over ‘improper conduct’ in India, other",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/WhatsApp-Image-2022-09-28-at-13.16.35.jpeg?w=316",
    title:"Maharashtra’s Shiv Bhojan Thali: What is the scheme, why is it under scanner",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Japan_China_Anniversary_Diplomatic_Gambit_35663-1b3ac.jpg?w=316",
    title:"On 50th anniversary of normalisation of ties, what issues strain China-Japan",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/ch1481076.jpg?w=316",
    title:"Govt has banned PFI, what can happen to the organisation and its",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/PFI-explained-2.jpg?w=316",
    title:"What ‘ban’ on Popular Front of India means",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/mobile-phone-1200.jpg?w=316",
    title:"Why registering mobile phones’ IMEI number with the govt is now mandatory",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/taj-main-1200.jpg?w=316",
    title:"How pollution, insects are threatening Taj Mahal, and what Supreme Court has",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/ram-setu2.jpg?w=316",
    title:"Subject of Akshay Kumar’s new movie, why Ram Setu is the bridge across history,",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Kaziranga-opening-and-jeep-safari-5.jpg?w=316",
    title:"Was it illegal for Himanta and Sadhguru to enter Kaziranga at night? Strictly",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/snowden.jpg?w=316",
    title:"Who is Edward Snowden, the American granted Russian citizenship by",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/E-global-I.jpg?w=316",
    title:"Why India has lashed out at the US over its F-16 package to Pakistan",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Modi-and-Abe.jpg?w=316",
    title:"Why PM Narendra Modi is attending the funeral of former Japan PM Shinzo",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/Magnus-and-Niemann-1.jpeg?w=316",
    title:"Is it easy to cheat at chess? Apparently yes. Here’s how",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/lalu-nitish-1.jpg?w=316",
    title:"The Kurmis: a political history",
  },
  {
    imgSrc:"https://images.indianexpress.com/2022/09/dart.jpg?w=316",
    title:"Why NASA has deliberately crashed a spacecraft into an asteroid",
  },

];

let dualCards = [
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/nolan-Murugadoss.jpg",
    title:"When Christopher Nolan got upset with Ghajini filmmaker AR Murugadoss: 'Heard one of my films has been copied…'"
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/what-the-hell-navya-1200.jpg",
    title:"Navya Nanda says grandmother Jaya Bachchan 'would bash a lot of people up in the world if she could'",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_178%2Cw_320%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/hijab-row.jpg",
    title:"Hijab case is a chance for SC to reverse losses in the right to religious freedom",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_178%2Cw_320%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/shahbaz-ahmed.jpg",
    title:"IND vs SA T20I series: Shahbaz Ahmed, Shreyas Iyer replace Hardik Pandya and Deepak Hooda"
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/shrikant-shinde.jpg",
    title:"Eknath Shinde's son Shrikant caught in eye of storm after pic shows him sitting in CM's chair",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/ukraine-cover.jpg",
    title:"As Russian losses mount in Ukraine, Vladimir Putin gets more involved in war strategy",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/mohan-bhagwat-1200-2-3.jpg",
    title:"SY Quraishi writes: Why we met RSS chief Mohan Bhagwat",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/Untitled-design-2022-09-24T113037.376.jpg",
    title:"Aishwarya Rai Bachchan, Trisha Krishnan, Vikram, AR Rahman travel economy class for Ponniyin Selvan promotions, fans says 'we love a budget'",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/AK1200-2.jpg",
    title:"Ayesha Jhulka says she isn't in touch with Akshay Kumar, Salman Khan: 'Friendships don't last here because…'",
  },
  {
    imgSrc:"https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_334%2Cw_600%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/https%3A//images.indianexpress.com/2022/09/modi-putin-3.jpg",
    title:"Russian envoy responds to US reaction to PM Modi's comments to Putin on Ukraine war",
  },
];