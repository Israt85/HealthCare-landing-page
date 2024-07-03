import About from "../../Components/About";
import Banner from "../../Components/Banner";
import CareSection from "../../Components/CareSection";
import Discount from "../../Components/Discount";
import Faq from "../../Components/Faq";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Service from "../../Components/Service";
import Testimonial from "../../Components/Testimonial";


const Home = () => {
    return (
       <div>
         <div className="max-w-[1161px] mx-auto ">
          <Navbar></Navbar>
          <Banner></Banner>
          <CareSection></CareSection>
          <About></About>
          <Service></Service>
          <Testimonial></Testimonial>
          <Faq></Faq>
          <Discount></Discount>
        </div>
        <Footer></Footer>
       </div>
    );
};

export default Home;