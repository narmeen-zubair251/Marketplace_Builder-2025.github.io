import AboutUs from "@/components/landing page/AboutUs";
import Category from "@/components/landing page/Category";
import Chefs from "@/components/landing page/Chefs";
import ChooseUs from "@/components/landing page/ChooseUs";
import Clients from "@/components/landing page/Clients";
import Hero from "@/components/landing page/Hero";
import OurMenu from "@/components/landing page/OurMenu";

export default function Home() {
  return (
    <div>
   <Hero/>
  <AboutUs/>
  <Category/>
  <ChooseUs/>
  <OurMenu/>
  <Chefs/>
  <Clients/>
  
  
    </div>
  );
}
// type food ={
//   _id:string,
//   _name:string,
//   category:string,
//   price:number,
//   originalPrice:number,
//   tags:string,
//   image:string,
// }

