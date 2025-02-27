import react, { createContext } from "react";

const ServiceData1 = createContext(["WEDDING CATERING SERVICES.", "HOUSE PARTY CATERING SERVICES.", "CORPORATE CATERING SERVICES.", "INSTITUTIONAL CATERING SERVICES.", "RELIGIOUS CEREMONY CATERING."]);
const ServiceData2 = createContext(["Largest Menu variety with over 1000 dishes from all cuisine types.", "Affordable prices starting from Rs 150/- per person.", "Delicious and freshly prepared food in hygienic home kitchens.","Served by the best caterers, who are India's famous home chefs.","Specialized catering for all party occasions and celebrations."])
const USP =createContext([{head:"TASTE",para:"Our Home Chefs have exceptional culinary skills with a passion for cooking. An undying Love for making Food and serving people with Joy is what unites every Home Chef. Our Chefs have carried forward hidden recipes passed to them by their Mother and Grandmother applauded by everyone.",img:"/image/smile.png"},
    {head:"HEALTHY",para:"Food is made with Pure and Fresh Ingredients in Hygienic Home Kitchens. SHER - E - Punjab has been very selective and responsible in selecting Home Chefs based on Food Quality, hygiene, and cleanliness of their kitchens. All Home Chefs are 100% FSSAI certified, and we guarantee the Healthiest option.",img:"/image/Fresh.png"},
    {head:"VARIETY",para:"Our Home Chefs come from all parts of the country to create a Food Culture of Diversity and uniting everyone with Food. The endless variety of cuisines and bakery items from across the country will leave you drooling. We offer you a Curated Menu of over 1000+ Authentic Dishes.",img:"/image/Variety.png"}
])
const Navlink =createContext([
    {text:"HOME",link:"#"},
    {text:"ABOUT US",link:"#about-us"},
    {text:"DELIVERY AREAS",link:"#"},
    {text:"EMAIL US",link:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=Sherepunjabrestaurant616@gmail.com"}])
export { ServiceData1 ,ServiceData2 ,Navlink,USP}