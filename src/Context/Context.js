import react, { createContext } from "react";

const ServiceData1 = createContext(["WEDDING CATERING SERVICES.", "HOUSE PARTY CATERING SERVICES.", "CORPORATE CATERING SERVICES.", "INSTITUTIONAL CATERING SERVICES.", "RELIGIOUS CEREMONY CATERING."]);
const ServiceData2 = createContext( [
    "LARGEST MENU VARIETY WITH OVER 1000 DISHES FROM ALL CUISINE TYPES.",
    "AFFORDABLE PRICES STARTING FROM RS 200/- PER PERSON.",
    "DELICIOUS AND FRESHLY PREPARED FOOD IN HYGIENIC KITCHENS.",
    "SPECIALIZED CATERING FOR ALL PARTY OCCASIONS AND CELEBRATIONS."
  ])
const USP =createContext([{head:"TASTE",para:"Our Chefs have exceptional culinary skills with a passion for cooking. An undying Love for making Food and serving people with Joy is what unites every Chef. Our Chefs have carried forward hidden recipes passed to them by their Mother and Grandmother applauded by everyone.",img:"/image/smile.png"},
    {head:"HEALTHY",para:"Food is made with Pure and Fresh Ingredients in Hygienic Kitchens. SHER - E - PUNJAB has been very selective and responsible in selecting Chefs based on Food Quality, hygiene, and cleanliness of their kitchens.",img:"/image/Healthy.png"},
    {head:"VARIETY",para:"Our Chefs come from all parts of the country to create a Food Culture of Diversity and uniting everyone with Food. The endless variety of cuisines and bakery items from across the country will leave you drooling. We offer you a Curated Menu of over 1000+ Authentic Dishes.",img:"/image/Variety.png"}
])
const Navlink =createContext([
    {text:"HOME",link:"/"},
    {text:"ABOUT US",link:"about-us"},
    {text:"DELIVERY AREAS",link:"delivery-area"},
    {text:"EMAIL US",link:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Sherepunjabrestaurant616@gmail.com", link2:"mailto:Sherepunjabrestaurant616@gmail.com"}])
 const Historypara =createContext([
    {heading:"FOUNDER",para:`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Ranjeet Singh Khaira</strong>  (Born 24th Sep 1992).He is known as the Founder of Sher-E-PUNJAB restaurant and catering services (LAKESHORE LODHA, PHASE 2)`},{heading:"EARLY LIFE",para:"Born in mumbai, India into JAT SIKH family to Sukhdev Singh And Rajvinder Kaur Khaira was inspired by the kebab vendors in mumbai at a young age which led him to pursue his love for food. His passion to learn the art led him to volunteer as an apprentice to one of them. Ranjeet Singh Dhillon, Though his family initially resisted, they finally gave in leading Ranjeet Singh Khaira to join MINI PUNJAB in 2009"},{heading:"CAREER",para:"Ranjeet Singh Khaira began with MINI PUNJAB from 2009 as a kitchen supervisor job. After the kitchen supervisory job, they gave me other different tasks also, like donig some tour management, restaurant setup, I also handled the corporate Catering. I worked in MINI PUNJAB from 2009 to 2017  work for mumbai’s no1 catering services Mini PUNJAB and Taj group."}
 ])   

export { ServiceData1 ,ServiceData2 ,Navlink,USP,Historypara}